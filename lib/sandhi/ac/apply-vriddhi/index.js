import {operator} from 'putout';
import {
    VRIDDHI,
    astiEn,
    astiEN,
} from '#pratyahara';

const {remove} = operator;

export const report = () => `vṛddhireci`;

export const when = ({last, first, nextName}) => (last === 'a' || last === 'A') && (astiEn(first) || astiEN(first) || /^a[iu]/.test(nextName));

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

