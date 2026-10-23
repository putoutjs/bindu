export const createSandhi = (options) => {
    const {
        report,
        when,
        then,
        fix,
    } = options && 'plugin' in options ? options.plugin : options;
    const runner = {
        report,
        fix,
        traverse: ({push}) => ({
            Identifier(path) {
                const next = path.getNextSibling();
                
                if (!path.parentPath.isSequenceExpression())
                    return;
                
                if (!next.node)
                    return;
                
                const {name} = path.node;
                const nextName = next.node.name;
                const last = name.at(-1);
                const first = nextName.at(0);
                const preLast = name.at(-2);
                
                const ctx = {
                    name,
                    nextName,
                    last,
                    first,
                    preLast,
                };
                
                if (!when(ctx))
                    return;
                
                const result = then ? then(ctx) : {};
                
                push({
                    path,
                    next,
                    ...ctx,
                    ...result,
                });
            },
        }),
    };
    
    return 'rule' in options ? {
        rule: options.rule,
        plugin: runner,
        msg: options.msg,
        options: options.options,
    } : runner;
};
