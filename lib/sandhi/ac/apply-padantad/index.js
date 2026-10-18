import {operator} from 'putout';
import {avagraha} from '../../../symbols.js';

const {remove} = operator;

export const report = () => `eṅaḥ padāntād ati`;

export const when = ({name, first}) => first === 'a' && /(a[ui]|[eo])$/.test(name);

export const fix = ({path, next, name, nextName}) => {
    path.node.name = `${name}${avagraha.code}${nextName.slice(1)}`;
    remove(next);
};

