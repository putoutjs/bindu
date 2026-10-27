import {avyayamAsti} from '#avyaya';
import {
    astiShortVowel,
    DIRGHA_MAP,
    YAN_MAP,
} from '#pratyahara';
import {pragrhyamAsti} from '#pragrhya';

export const report = () => `ekaḥ pūrvaparayoḥ`;
export const sutra = () => '6.1.84';

export const when = ({last, first, nextName, name}) => {
    if (!avyayamAsti(nextName))
        return false;
    
    if (pragrhyamAsti(name))
        return false;
    
    const lastLow = last.toLowerCase();
    const firstLow = first.toLowerCase();
    
    if (!astiShortVowel(lastLow))
        return false;
    
    if (lastLow === firstLow && DIRGHA_MAP[last])
        return true;
    
    return YAN_MAP[last] && /[aie]/.test(firstLow);
};

export const then = ({last, first}) => {
    const lastLow = last.toLowerCase();
    const firstLow = first.toLowerCase();
    
    if (lastLow === firstLow)
        return {
            kind: 'dirgha',
            dirgha: DIRGHA_MAP[last],
        };
    
    return {
        kind: 'yan',
        yan: YAN_MAP[last],
    };
};

export const fix = ({path, name, nextName, kind, yan, dirgha}) => {
    if (kind === 'dirgha') {
        path.node.name = `${name.slice(0, -1)}${dirgha}${nextName.slice(1)}`;
        path.parentPath.node.expressions.pop();
        
        return;
    }
    
    if (kind === 'yan') {
        path.node.name = `${name.slice(0, -1)}${yan}${nextName}`;
        path.parentPath.node.expressions.pop();
        
        return;
    }
};
