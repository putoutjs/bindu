import {operator} from 'putout';
import {astiIk} from '#pratyahara';

const {remove} = operator;

export const report = () => 'ādeśapratyayoḥ';

export const when = ({last, name}) => {
    return last === 's' && astiIk(name.at(-2));
};

export const fix = ({path, name, nextName, next}) => {
    path.node.name = `${name.slice(0, -1)}S${nextName}`;
    remove(next);
};
