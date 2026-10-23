import {operator} from 'putout';
import {astiAc} from '#pratyahara';

const {remove} = operator;

export const report = () => `ro ri`;

export const when = ({last, first}) => last === 'H' && astiAc(first.toLowerCase());

export const fix = ({path, next, name, nextName}) => {
    path.node.name = `${name.slice(0, -1)}r${nextName}`;
    remove(next);
};
