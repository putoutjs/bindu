import {createTest} from '@putout/test';
import {createSandhi} from '#sandhi';

export const createSandhiTest = (url, options) => {
    const {plugins} = options;
    
    const wrappedPlugins = plugins.map(([name, plugin]) => [
        name,
        createSandhi(plugin),
    ]);
    
    return createTest(url, {
        ...options,
        plugins: wrappedPlugins,
    });
};
