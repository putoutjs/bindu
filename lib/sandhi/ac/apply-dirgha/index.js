import {operator} from 'putout';
import {avyayamAsti} from '#avyaya';

const {remove} = operator;

export const report = () => `akaḥ savarṇe dīrghaḥ`;

export const fix = ({path, next, name, nextName, dirgha}) => {
    path.node.name = `${name.slice(0, -1)}${dirgha}${nextName.slice(-1)}`;
    remove(next);
};

export const traverse = ({push}) => ({
    Identifier(path) {
        const next = path.getNextSibling();
        
        if (!next.node)
            return;
        
        const {name} = path.node;
        const nextName = next.node.name;
        
        if (avyayamAsti(nextName))
            return;
        
        const last = name
            .at(-1)
            .toLowerCase();
        
        const first = nextName
            .at(0)
            .toLowerCase();
        
        if (last !== first)
            return;
        
        const dirgha = first.toUpperCase();
        
        push({
            path,
            next,
            dirgha,
            name,
            nextName,
        });
    },
});
