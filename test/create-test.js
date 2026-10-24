import {createTest as createPutoutTest} from '@putout/test';
import {createSandhi} from '#sandhi';

export const createTest = (url, options) => createPutoutTest(url, {
    ...options,
    runners: {
        when: createSandhi,
    },
});
