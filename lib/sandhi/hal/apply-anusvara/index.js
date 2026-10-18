import {operator} from 'putout';
import {astiHal, VARGA_NASAL} from '#pratyahara';

const {remove} = operator;

export const report = () => `anusvārasya yayi parasavarṇaḥ`;

export const when = ({last, first}) => (last === 'M' || last === 'm') && astiHal(first);

export const then = ({first}) => ({
    vargaNasal: VARGA_NASAL[first.toLowerCase()],
});

export const fix = ({path, next, name, nextName, vargaNasal}) => {
    path.node.name = `${name.slice(0, -1)}${vargaNasal}${nextName}`;
    remove(next);
};
