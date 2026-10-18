import {astiVoicedHal} from '#pratyahara';

export const report = () => 'ato rora plutādaplute';

export const when = ({last, first, name}) =>
    last === 'H' && name.endsWith('aH') && astiVoicedHal(first);

export const fix = ({path, name}) => {
    path.node.name = `${name.slice(0, -2)}o`;
};