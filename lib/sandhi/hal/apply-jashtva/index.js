import {operator} from 'putout';
import {CAR, JASH_MAP} from '#pratyahara';

const {remove} = operator;

export const report = () => `jhalāṃ jaśo'nte`;

export const fix = ({path, next, name, nextName, voiced}) => {
    path.node.name = `${name.slice(0, -1)}${voiced}${nextName}`;
    remove(next);
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
        
        const last = name.at(-1);
        
        if (!CAR.includes(last))
            return;
        
        const first = nextName.at(0);
        
        // voiced sound: not voiceless (CAR) and not visarga (H)
        if (CAR.includes(first) || first === 'H')
            return;
        
        const voiced = JASH_MAP[last];
        
        push({
            path,
            next,
            voiced,
            name,
            nextName,
        });
    },
});
