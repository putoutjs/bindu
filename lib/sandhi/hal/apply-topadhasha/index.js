import {operator} from 'putout';
import {DENTAL_TD} from '#pratyahara';

const {remove} = operator;

export const report = () => `topadhāyāḥ`;

export const when = ({last, first}) => DENTAL_TD.includes(last) && first === 'l';

export const then = () => ({
    lateral: 'l',
});

export const fix = ({path, next, name, nextName, lateral}) => {
    path.node.name = `${name.slice(0, -1)}${lateral}${nextName}`;
    remove(next);
};
