import {operator} from 'putout';
import {
    YAN_MAP,
    astiIk,
    astiAc,
} from '#pratyahara';
import {pragrhyamAsti} from '#pragrhya';

const {remove} = operator;

export const report = () => `iko yaṇaci`;

export const when = ({last, first, name}) => {
    if (pragrhyamAsti(name))
        return false;
    
    return astiIk(last) && astiAc(first.toLowerCase());
};

export const then = ({last}) => ({
    yan: YAN_MAP[last],
});

export const fix = ({path, next, name, nextName, yan}) => {
    path.node.name = `${name.slice(0, -1)}${yan}${nextName}`;
    
    remove(next);
};
