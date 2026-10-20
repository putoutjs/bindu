import {operator} from 'putout';

const {remove} = operator;

const RSH = [
    'r',
    'R',
    'S',
    'z',
];

export const report = () => `raṣābhyāṃ no ṇaḥ samānapade`;

export const when = ({last, first}) => RSH.includes(last) && first === 'n';

export const then = () => ({
    retroflex: 'N',
});

export const fix = ({path, next, name, nextName, retroflex}) => {
    path.node.name = `${name}${retroflex}${nextName.slice(1)}`;
    remove(next);
};
