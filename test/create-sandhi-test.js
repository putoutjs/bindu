import {createTest} from '@putout/test';
import {createSandhi} from '#sandhi';

export const createSandhiTest = (url, options) => {
    const {plugins} = options;
    const wrappedPlugins = [];
    
    for (const [name, plugin] of plugins) {
        wrappedPlugins.push([name, createSandhi(plugin)]);
    }
    
    return createTest(url, {
        ...options,
        plugins: wrappedPlugins,
    });
};
