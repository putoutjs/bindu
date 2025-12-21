import {operator} from 'putout';
import {astiAc, astiEc} from '../../../pratyahara.js';
import {praptaPratapadika} from '../../../pratipadika.js';

const {remove} = operator;

export const report = () => `eco yavāyāvaḥ`;

export const fix = ({path, next, name, nextName}) => {
    if (name.endsWith('e')) {
        path.node.name = `${name.slice(0, -1)}ay${nextName}`;
        remove(next);
        
        return;
    }
    
    if (name.endsWith('o')) {
        path.node.name = `${name.slice(0, -1)}av${nextName}`;
        remove(next);
        
        return;
    }
    
    if (name.endsWith('ai')) {
        path.node.name = `${name.slice(0, -1)}Ay${nextName}`;
        remove(next);
        
        return;
    }
    
    if (name.endsWith('au')) {
        path.node.name = `${name.slice(0, -1)}Av${nextName}`;
        remove(next);
        
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
        const first = nextName.at(0);
        const last = name.at(-1);
        const preLast = name.at(-2);
        
        if (!astiEc(last) && !astiEc(preLast + last))
            return;
        
        if (!astiAc(first))
            return;
        
        if (first === 'e' && first === last)
            return;
        
        const stem = praptaPratapadika(name);
        
        if (stem && stem !== name)
            return;
        
        push({
            path,
            next,
            name,
            nextName,
        });
    },
});
