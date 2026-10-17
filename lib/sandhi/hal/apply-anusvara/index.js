import {operator} from 'putout';
import {astiHal, VARGA_NASAL} from '#pratyahara';

const {remove} = operator;

export const report = () => `anusvārasya yayi parasavarṇaḥ`;

export const fix = ({path, next, name, nextName, vargaNasal}) => {
    path.node.name = `${name.slice(0, -1)}${vargaNasal}${nextName}`;
    remove(next);
};

export const traverse = ({push}) => ({
    Identifier(path) {
        const next = path.getNextSibling();
        
        if (!path.parentPath.isSequenceExpression())
            return;
        
        if (!next.node)
            return;
        
        const {name} = path.node;
        const nextName = next.node.name;
        
        const last = name.at(-1);
        
        if (last !== 'M' && last !== 'm')
            return;
        
        const first = nextName.at(0);
        
        if (!astiHal(first))
            return;
        
        const vargaNasal = VARGA_NASAL[first.toLowerCase()];
        
        push({
            path,
            next,
            vargaNasal,
            name,
            nextName,
        });
    },
});
