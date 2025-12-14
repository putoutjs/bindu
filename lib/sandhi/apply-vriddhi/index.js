import {operator} from 'putout';

const {remove} = operator;

export const report = () => `vṛddhireci`;

export const fix = ({path, next, name, nextName}) => {
    const joint = getJoint(nextName);
    
    path.node.name = `${name}${joint}${nextName.slice(1)}`;
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
        
        const [first] = nextName;
        
        if (last !== 'a')
            return;
        
        if (!/[oe]/.test(first) && !/^a[iu]/.test(nextName))
            return;
        
        push({
            path,
            next,
            name,
            nextName,
        });
    },
});

function getJoint([first, second]) {
    if (first === 'e')
        return 'i';
    
    if (second === 'i')
        return '';
    
    if (second === 'u')
        return '';
    
    return 'u';
}
