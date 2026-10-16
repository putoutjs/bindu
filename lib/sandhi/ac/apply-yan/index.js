import {operator} from 'putout';
import {
    YAN_MAP,
    astiIk,
    astiAc,
} from '#pratyahara';

const {remove} = operator;

export const report = () => `iko yaṇaci`;

export const fix = ({path, next, name, nextName, yan}) => {
    path.node.name = `${name.slice(0, -1)}${yan}${nextName}`;
    
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
        
        const first = nextName
            .at(0)
            .toLowerCase();
        
        if (!astiIk(last) || !astiAc(first))
            return;
        
        const yan = YAN_MAP[last];
        
        push({
            path,
            next,
            name,
            nextName,
            yan,
        });
    },
});
