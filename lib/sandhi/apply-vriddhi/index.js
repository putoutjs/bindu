import {operator} from 'putout';

const {remove} = operator;
const SANDHI = {
    e: 'ai',
    o: 'au',
};

export const report = () => `vṛddhireci`;

export const fix = ({path, next, name, nextName, vriddhi}) => {
    path.node.name = `${name.slice(0, -1)}${vriddhi}${nextName.slice(1)}`;
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
        
        const vriddhi = SANDHI[first];
        
        push({
            path,
            next,
            vriddhi,
            name,
            nextName,
        });
    },
});
