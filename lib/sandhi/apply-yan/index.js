import {operator} from 'putout';

const {remove} = operator;
const {keys} = Object;

const SANDHI = {
    i: 'y',
    u: 'v',
    f: 'r',
    x: 'l',
};

const YAN = keys(SANDHI);

const SVARA = [
    'a',
    'i',
    'u',
    'f',
    'x',
    'e',
    'o',
];

export const report = () => `acvaṅgā ya va ra la`;

export const fix = ({path, next, name, nextName, yan}) => {
    path.node.name = `${name.slice(0, -1)}${yan}${nextName}`;
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
        
        if (!SVARA.includes(first))
            return;
        
        if (!YAN.includes(last))
            return;
        
        const yan = SANDHI[last];
        
        push({
            path,
            next,
            name,
            nextName,
            yan,
        });
    },
});
