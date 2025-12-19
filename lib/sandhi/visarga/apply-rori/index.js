import {operator} from 'putout';
import {astiAc} from '../../../pratyahara.js';

const {remove} = operator;

export const report = () => `ro ri`;

export const fix = ({path, next, name, nextName}) => {
    path.node.name = `${name.slice(0, -1)}r${nextName}`;
    remove(next);
};

export const traverse = ({push}) => ({
    Identifier(path) {
        const next = path.getNextSibling();
        
        if (!next.node)
            return;
        
        const {name} = path.node;
        const nextName = next.node.name;
        
        const first = nextName
            .at(0)
            .toLowerCase();
        
        const last = name.at(-1);
        
        if (last !== 'H' || !astiAc(first))
            return;
        
        push({
            path,
            next,
            name,
            nextName,
        });
    },
});
