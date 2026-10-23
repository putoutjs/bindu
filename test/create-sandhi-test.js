import {createTest} from '@putout/test';
import {createSandhi} from '#sandhi';

export const createSandhiTest = (url, options) => createTest(url, {
    ...options,
    runners: {
        when: createSandhi,
    },
});
