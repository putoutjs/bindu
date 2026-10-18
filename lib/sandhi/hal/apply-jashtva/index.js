import {operator} from 'putout';
import {CAR, JASH_MAP} from '#pratyahara';

const {remove} = operator;

export const report = () => `jhalāṃ jaśo'nte`;

export const when = ({last, first}) => CAR.includes(last) && !CAR.includes(first) && first !== 'H';

export const then = ({last}) => ({
    voiced: JASH_MAP[last],
});

export const fix = ({path, next, name, nextName, voiced}) => {
    path.node.name = `${name.slice(0, -1)}${voiced}${nextName}`;
    remove(next);
};

