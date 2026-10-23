import {operator} from 'putout';
import {astiVoicedHal, astiAc} from '#pratyahara';
import {avagraha} from '../../../symbols.js';

const {remove} = operator;

export const report = () => 'ato roraplute';

export const when = ({first, name}) => name.endsWith('as') && (astiVoicedHal(first) || astiAc(first.toLowerCase()));

export const then = ({first}) => ({
    isVowel: astiAc(first.toLowerCase()),
});

export const fix = ({path, next, name, nextName, isVowel}) => {
    const stem = name.slice(0, -2);
    
    // drop 'as'
    if (isVowel) {
        path.node.name = `${stem}o${avagraha.code}${nextName.slice(1)}`;
        remove(next);
        
        return;
    }
    
    path.node.name = `${stem}o`;
};
