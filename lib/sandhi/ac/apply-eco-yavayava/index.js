import {operator} from 'putout';
import {astiEc, astiAc} from '#pratyahara';
import {praptaPratapadika} from '../../../pratipadika.js';

const {remove} = operator;

export const report = () => `eco yavāyāvaḥ`;

export const when = ({last, preLast, first, name}) => {
    if (!astiEc(last) && !astiEc(preLast + last))
        return false;
    
    if (!astiAc(first))
        return false;
    
    if (first === 'e' && first === last)
        return false;
    
    const stem = praptaPratapadika(name);
    
    return !(stem && stem !== name);
};

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
