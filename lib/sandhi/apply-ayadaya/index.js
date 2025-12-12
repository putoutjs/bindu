import {operator} from 'putout';

const {remove} = operator;

export const report = () => `ayādayaḥ`;

export const fix = ({path, next, name, nextName}) => {
    remove(next);
    
    if (nextName.startsWith('a')) {
        path.node.name = `${name}${nextName.slice(1)}`;
        return;
    }
    
    if (nextName.startsWith('ya')) {
        path.node.name = `${name.slice(0, -1)}${nextName.slice(1)}`;
        return;
    }
    
    path.node.name = `${name.slice(0, -1)}i${nextName.slice(1)}`;
};

export const traverse = ({push}) => ({
    Identifier(path) {
        const next = path.getNextSibling();
        
        if (!next.node)
            return;
        
        const {name} = path.node;
        const nextName = next.node.name;
        
        if (!name.endsWith('ya'))
            return;
        
        if (!/^(i|a|ya)/.test(nextName))
            return;
        
        push({
            path,
            next,
            name,
            nextName,
        });
    },
});
