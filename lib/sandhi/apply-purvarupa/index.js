import {operator} from 'putout';
import {avyayamAsti} from '#avyaya';

const {remove} = operator;

export const report = () => `ekaḥ pūrvaparayoḥ`;

export const fix = ({path, next, name, nextName}) => {
    path.node.name = `${name}${nextName.slice(1)}`;
    remove(next);
};

export const traverse = ({push}) => ({
    Identifier(path) {
        const next = path.getNextSibling();
        
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
