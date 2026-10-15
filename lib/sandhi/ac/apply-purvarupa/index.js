import {avyayamAsti} from '#avyaya';

export const report = () => `ekaḥ pūrvaparayoḥ`;

const DIRGHA = {
    a: 'A',
    A: 'A',
    i: 'I',
    I: 'I',
    u: 'U',
    U: 'U',
    f: 'F',
    x: 'X',
};

const YAN = {
    i: 'y',
    I: 'y',
    u: 'v',
    U: 'v',
    f: 'r',
    x: 'l',
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
        
        if (lastLow === first && DIRGHA[last]) {
            push({
                path,
                next,
                name,
                nextName,
                kind: 'dirgha',
                dirgha: DIRGHA[last],
            });
            return;
        }
        
        if (YAN[last] && /[aie]/.test(first)) {
            push({
                path,
                next,
                name,
                nextName,
                kind: 'yan',
                yan: YAN[last],
            });
            return;
        }
    },
});
