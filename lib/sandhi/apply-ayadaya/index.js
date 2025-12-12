import {operator} from 'putout';
import {avagraha} from '../../symbols.js';

const {remove} = operator;

export const report = () => `ayādayaḥ`;

export const fix = ({path, next, name, nextName}) => {
    const joint = createJoint(name, nextName);
    
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
        
        if (!/[aiueo]/.test(last) || !/[aiueo]/.test(first))
            return;
        
        push({
            path,
            next,
            name,
            nextName,
        });
    },
});

function createJoint(name, nextName) {
    if (name.endsWith('a') && nextName.startsWith('e'))
        return 'aye';
    
    if (name.endsWith('a') && nextName.startsWith('o'))
        return 'ayau';
    
    if (name.endsWith('e') && nextName.startsWith('a'))
        return `e${avagraha.code}`;
    
    return '';
}
