import {operator} from 'putout';
import {astiAc} from '#pratyahara';

const {remove} = operator;
const purvasya = [
    'bhoH',
    'bhagoH',
    'aghoH',
    'namaH',
];

export const report = () => `bhobhago’gho’pūrvasya yo’śi`;

export const when = ({name, first}) => purvasya.includes(name) && astiAc(first.toLowerCase());

export const fix = ({path, next, name, nextName}) => {
    path.node.name = `${name.slice(0, -2)}o'${nextName}`;
    remove(next);
};
