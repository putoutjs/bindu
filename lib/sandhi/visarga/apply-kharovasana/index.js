import {astiKhar} from '../../../pratyahara.js';

export const report = () => `kharavasānayor visarjanīyaḥ`;

export const when = ({last, first}) => /[sr]/.test(last) && astiKhar(first);

export const fix = ({path, name}) => {
    path.node.name = `${name.slice(0, -1)}H`;
};

