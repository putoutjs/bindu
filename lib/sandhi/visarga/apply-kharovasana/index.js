import {astiKhar} from '#pratyahara';

export const report = () => `kharavasānayor visarjanīyaḥ`;

export const when = ({last, first}) => (last === 's' || last === 'r') && astiKhar(first);

export const fix = ({path, name}) => {
    path.node.name = `${name.slice(0, -1)}H`;
};
