import {operator} from 'putout';

const {remove} = operator;

export const report = () => `vṛddhireci`;

export const fix = ({path, next, name, nextName}) => {
    path.node.name = `${name.slice(0, -1)}A${nextName.slice(1)}`;
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
        
        const [first, second] = nextName;
        
        if (last !== 'a' || first !== 'a' || !/[iu]/.test(second))
            return;
        
        push({
            path,
            next,
            name,
            nextName,
        });
    },
});
