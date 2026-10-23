import {astiIk} from '#pratyahara';

const KHAR_TRIGGER = ['k', 'K', 'p', 'P'];

export const report = () => 'ādeśapratyayoḥ';

export const when = ({last, first, name}) =>
    last === 's' && (astiIk(name[name.length - 2]) || KHAR_TRIGGER.includes(first));

export const fix = ({path, name, nextName, next}) => {
    path.node.name = `${name.slice(0, -1)}S${nextName}`;
    remove(next);
};