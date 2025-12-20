import {astiKhar} from '../../../pratyahara.js';

export const report = () => `kharavasānayor visarjanīyaḥ`;

export const fix = ({path, name}) => {
    path.node.name = `${name.slice(0, -1)}H`;
};

export const traverse = ({push}) => ({
    Identifier(path) {
        const next = path.getNextSibling();
        
        if (!next.node)
            return;
        
        const {name} = path.node;
        
        const nextName = next.node.name;
        const first = nextName.at(0);
        const last = name.at(-1);
        
        if (!/[sr]/.test(last))
            return;
        
        if (!astiKhar(first))
            return;
        
        push({
            path,
            next,
            name,
            nextName,
        });
    },
});
