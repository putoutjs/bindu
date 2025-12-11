import {operator} from 'putout';

const {remove} = operator;
const SANDHI = {
    e: 'aya',
    o: 'ava',
};

export const report = () => `ayādayaḥ`;

export const fix = ({path, next, name, nextName}) => {
    const joint = SANDHI[nextName];
    
    path.node.name = `${name.slice(0, -1)}${joint}${nextName.slice(1)}`;
    remove(next);
};

export const traverse = ({push}) => ({
    Identifier(path) {
        const next = path.getNextSibling();
        
        if (!next.node)
            return;
        
        const {name} = path.node;
        const nextName = next.node.name;
        
        const last = name
            .at(-1)
            .toLowerCase();
        
        const first = nextName
            .at(0)
            .toLowerCase();
        
        if (last !== 'a' || !/[eo]/.test(first))
            return;
        
        push({
            path,
            next,
            name,
            nextName,
        });
    },
});
