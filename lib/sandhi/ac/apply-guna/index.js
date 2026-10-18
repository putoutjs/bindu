import {operator} from 'putout';
import {GUNA, astiIk} from '#pratyahara';

const {remove} = operator;

export const report = () => `ād‑guṇaḥ`;

export const when = ({last, first}) => (last === 'a' || last === 'A') && astiIk(first);

export const then = ({first}) => ({
    guna: GUNA[first],
});

export const fix = ({path, next, name, nextName, guna}) => {
    path.node.name = `${name.slice(0, -1)}${guna}${nextName.slice(1)}`;
    remove(next);
};
