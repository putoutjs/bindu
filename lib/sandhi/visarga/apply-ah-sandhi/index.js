import {astiSibilant} from '#pratyahara';

export const declare = {};

export const report = () => 'rAmAH + asti -> rAm' + String.fromCharCode(39) + 'sti';

export const when = ({last, first}) => last === 'H' && astiSibilant(first);

export const fix = ({path, name}) => {
    path.node.name = name.slice(0, -1) + String.fromCharCode(39);
};