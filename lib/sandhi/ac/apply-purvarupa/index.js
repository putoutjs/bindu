import {avyayamAsti} from '#avyaya';
import {DIRGHA_MAP, YAN_MAP} from '#pratyahara';

export const report = () => `ekaḥ pūrvaparayoḥ`;

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

export const traverse = ({push}) => ({
    Identifier(path) {
        const next = path.getNextSibling();
        
        if (!path.parentPath.isSequenceExpression())
            return;
        
        if (!next.node)
            return;
        
        const {name} = path.node;
        const nextName = next.node.name;
        
        if (!avyayamAsti(nextName))
            return;
        
        const last = name.at(-1);
        const lastLow = last.toLowerCase();
        
        const first = nextName
            .at(0)
            .toLowerCase();
        
        if (!/[aiufxAIU]/.test(last))
            return;
        
        if (lastLow === first && DIRGHA_MAP[last]) {
            push({
                path,
                next,
                name,
                nextName,
                kind: 'dirgha',
                dirgha: DIRGHA_MAP[last],
            });
            return;
        }
        
        if (YAN_MAP[last] && /[aie]/.test(first)) {
            push({
                path,
                next,
                name,
                nextName,
                kind: 'yan',
                yan: YAN_MAP[last],
            });
            return;
        }
    },
});
