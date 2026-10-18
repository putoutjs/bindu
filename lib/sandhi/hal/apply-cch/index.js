import {operator} from 'putout';
import {astiShortVowel} from '#pratyahara';

const {remove} = operator;

export const report = () => 'che ca';

export const when = ({last, first}) =>
    astiShortVowel(last) && first === 'C';

export const fix = ({path, next, name, nextName}) => {
    path.node.name = `${name}c${nextName}`;
    remove(next);
};