import {operator} from 'putout';
import {avyayamAsti} from '#avyaya';
import {astiAk} from '#pratyahara';
import {pragrhyamAsti} from '#pragrhya';

const {remove} = operator;

export const report = () => `akaḥ savarṇe dīrghaḥ`;

export const when = ({last, first, nextName, name}) => {
    if (avyayamAsti(nextName))
        return false;
    
    if (pragrhyamAsti(name))
        return false;
    
    const lastLow = last.toLowerCase();
    const firstLow = first.toLowerCase();
    
    return astiAk(lastLow) && lastLow === firstLow;
};

export const then = ({last}) => ({
    dirgha: last.toUpperCase(),
});

export const fix = ({path, next, name, nextName, dirgha}) => {
    path.node.name = `${name.slice(0, -1)}${dirgha}${nextName.slice(1)}`;
    remove(next);
};
