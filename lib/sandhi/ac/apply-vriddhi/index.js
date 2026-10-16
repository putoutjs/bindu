import {operator} from 'putout';
import {
    VRIDDHI,
    astiEn,
    astiEN,
} from '#pratyahara';

const {remove} = operator;

export const report = () => `vṛddhireci`;

export const fix = ({path, next, name, nextName}) => {
    const first = nextName.at(0);
    let joint;
    
    if (first === 'e')
        joint = 'i';
    else if (first === 'o')
        joint = 'u';
    else
        joint = VRIDDHI[first] || '';
    
    path.node.name = `${name}${joint}${nextName.slice(1)}`;
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
        
        if (!astiEn(first) && !astiEN(first) && !/^a[iu]/.test(nextName))
            return;
        
        push({
            path,
            next,
            name,
            nextName,
        });
    },
});
