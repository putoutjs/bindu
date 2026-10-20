import {operator} from 'putout';
import {KHAR, KHAR_MAP} from '#pratyahara';

const {remove} = operator;

export const report = () => `khari ca`;

export const when = ({last, first}) => KHAR_MAP[last] && KHAR.includes(first);

export const then = ({last}) => ({
    voiceless: KHAR_MAP[last],
});

export const fix = ({path, next, name, nextName, voiceless}) => {
    path.node.name = `${name.slice(0, -1)}${voiceless}${nextName}`;
    remove(next);
};
