import {operator} from 'putout';
import {
    DENTAL_STOP,
    PALATAL_STOP,
    PALATAL_MAP,
} from '#pratyahara';

const {remove} = operator;

export const report = () => 'ṣṭunā ṣṭuḥ';

export const when = ({last, first}) => DENTAL_STOP.includes(last) && PALATAL_STOP.includes(first);

export const then = ({last}) => ({
    palatal: PALATAL_MAP[last],
});

export const fix = ({path, next, name, nextName, palatal}) => {
    path.node.name = `${name.slice(0, -1)}${palatal}${nextName}`;
    remove(next);
};
