import {operator} from 'putout';
import {astiEc} from '#pratyahara';
import {avagraha} from '#symbols';

const {remove} = operator;

export const report = () => `ayādayaḥ`;

export const when = ({last, preLast, name, nextName}) => {
    if (!astiEc(last) && !astiEc(preLast + last))
        return false;
    
    if (name.endsWith('e') && !/^[aueio]/.test(nextName))
        return false;
    
    if (name.endsWith('o') && !/^[aiu]/.test(nextName))
        return false;
    
    if (name.endsWith('ai') && !/^[ai]/.test(nextName))
        return false;
    
    return !name.endsWith('au') || /^[ai]/.test(nextName);
};

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
