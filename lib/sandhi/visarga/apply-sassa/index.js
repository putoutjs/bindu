import {operator} from 'putout';
import {astiSibilant} from '#pratyahara';

const {remove} = operator;

export const report = () => 'visarjanīyasya saḥ';

export const when = ({last, first}) => last === 'H' && astiSibilant(first);

export const then = ({first}) => ({
    sibilant: first,
});

export const fix = ({path, next, name, nextName, sibilant}) => {
    const rest = sibilant === 'z' ? nextName.slice(1) : nextName;
    
    path.node.name = `${name.slice(0, -1)}${sibilant}${rest}`;
    remove(next);
};
