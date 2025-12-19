import {operator} from 'putout';
import {astiAc} from '../../../pratyahara.js';

const {remove} = operator;
const purvasya = [
    'bhoH',
    'bhagoH',
    'aghoH',
    'namaH',
];

export const report = () => `bhobhago’gho’pūrvasya yo’śi`;

export const fix = ({path, next, name, nextName}) => {
    path.node.name = `${name.slice(0, -2)}o'${nextName}`;
    remove(next);
};

export const traverse = ({push}) => ({
    Identifier(path) {
        const next = path.getNextSibling();
        
        if (!next.node)
            return;
        
        const {name} = path.node;
        
        if (!purvasya.includes(name))
            return;
        
        const nextName = next.node.name;
        
        const first = nextName
            .at(0)
            .toLowerCase();
        
        if (!astiAc(first))
            return;
        
        push({
            path,
            next,
            name,
            nextName,
        });
    },
});
