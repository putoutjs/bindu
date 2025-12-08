import {operator} from 'putout';

const {remove} = operator;
const SANDHI = {
    i: 'e',
    u: 'o',
};

export const report = () => `ād‑guṇaḥ`;

export const fix = ({path, next, name, nextName, guna}) => {
    path.node.name = `${name.slice(0, -1)}${guna}${nextName.slice(1)}`;
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
        
        if (last !== 'a' || !/[iu]/.test(first))
            return;
        
        const guna = SANDHI[first];
        
        push({
            path,
            next,
            guna,
            name,
            nextName,
        });
    },
});
