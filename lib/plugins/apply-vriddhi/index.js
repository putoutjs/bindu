const {entries} = Object;

const VRIDDHI = {
    ie: 'ye',
    ai: 'e',
    ia: 'ya',
};

export const report = ({from, to}) => `vṛddhirādaic: ${from} -> ${to}`;

export const traverse = ({push}) => ({
    Identifier(path) {
        const {name} = path.node;
        
        for (const [from, to] of entries(VRIDDHI)) {
            if (name.includes(from)) {
                push({
                    path,
                    from,
                    to,
                });
                return;
            }
        }
    },
});

export function fix({path, from, to}) {
    const {name} = path.node;
    path.node.name = name.replace(from, to);
}
