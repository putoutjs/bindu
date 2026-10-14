import {avyayamAsti} from '#avyaya';

export const report = () => `ekaḥ pūrvaparayoḥ`;

export const fix = ({path, name, nextName}) => {
    path.node.name = `${name}${nextName.slice(1)}`;
    path.parentPath.node.expressions.pop();
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
        
        const last = name
            .at(-1)
            .toLowerCase();
        
        const first = nextName
            .at(0)
            .toLowerCase();
        
        if (!avyayamAsti(nextName))
            return;
        
        if (!/[aiueo]/.test(last) || first === 'a' && last === 'e')
            return;
        
        push({
            path,
            next,
            name,
            nextName,
        });
    },
});
