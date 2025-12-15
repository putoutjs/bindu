import {operator} from 'putout';
import {avagraha} from '../../symbols.js';

const {remove} = operator;

export const report = () => `ayādayaḥ`;

export const fix = ({path, next, name, nextName}) => {
    remove(next);
    
    if (name.endsWith('au')) {
        path.node.name = `${name.slice(0, -1)}Av${nextName}`;
        return;
    }
    
    if (name.endsWith('ai')) {
        path.node.name = `${name.slice(0, -2)}Ay${nextName}`;
        return;
    }
    
    if (name.endsWith('e')) {
        if (nextName.startsWith('a')) {
            path.node.name = `${name.slice(0, -1)}aye${avagraha.code}${nextName.slice(1)}`;
            return;
        }
        
        path.node.name = `${name.slice(0, -1)}ay${nextName}`;
        return;
    }
    
    if (name.endsWith('o')) {
        path.node.name = `${name.slice(0, -1)}av${nextName}`;
        return;
    }
};

export const traverse = ({push}) => ({
    Identifier(path) {
        const next = path.getNextSibling();
        
        if (!next.node)
            return;
        
        const {name} = path.node;
        const nextName = next.node.name;
        
        if (!/([eo]|a[iu])$/.test(name))
            return;
        
        if (name.endsWith('e') && !/^[aueio]/.test(nextName))
            return;
        
        if (name.endsWith('o') && !/^[aiu]/.test(nextName))
            return;
        
        if (name.endsWith('ai') && !/^[ai]/.test(nextName))
            return;
        
        if (name.endsWith('au') && !/^[ai]/.test(nextName))
            return;
        
        push({
            path,
            next,
            name,
            nextName,
        });
    },
});
