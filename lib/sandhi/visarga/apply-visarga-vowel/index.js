import {operator} from 'putout';
import {astiAc} from '#pratyahara';
import {avagraha} from '../../../symbols.js';

const {remove} = operator;

export const report = () => 'haśi ca';

export const when = ({last, first, name}) => last === 'H' && name.endsWith('aH') && astiAc(first.toLowerCase());

export const fix = ({path, next, name, nextName}) => {
    path.node.name = `${name.slice(0, -2)}o${avagraha.code}${nextName.slice(1)}`;
    remove(next);
};
