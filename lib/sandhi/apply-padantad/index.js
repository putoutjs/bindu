import {operator} from 'putout';
import {avagraha} from '../../symbols.js';

const {remove} = operator;

export const report = () => `eṅaḥ padāntād ati`;

export const fix = ({path, next, name, nextName}) => {
    path.node.name = `${name}${avagraha.code}${nextName.slice(1)}`;
    remove(next);
};

export const traverse = ({push}) => ({
    Identifier(path) {
        const next = path.getNextSibling();
        
        if (!next.node)
            return;
        
        const {name} = path.node;
        const nextName = next.node.name;
        
        const first = nextName.at(0);
        
        if (first !== 'a')
            return;
        
        if (!/(a[ui]|[eo])$/.test(name))
            return;
        
        push({
            path,
            next,
            name,
            nextName,
        });
    },
});
