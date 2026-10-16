import {operator} from 'putout';
import {GUNA, astiIk} from '#pratyahara';

const {remove} = operator;

export const report = () => `ād‑guṇaḥ`;

export const fix = ({path, next, name, nextName, guna}) => {
    path.node.name = `${name.slice(0, -1)}${guna}${nextName.slice(1)}`;
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
        
        const first = nextName.at(0);
        
        if (last !== 'a' && last !== 'A')
            return;
        
        if (!astiIk(first))
            return;
        
        const guna = GUNA[first];
        
        push({
            path,
            next,
            guna,
            name,
            nextName,
        });
    },
});
