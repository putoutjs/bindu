import {createTest as createPutoutTest} from '@putout/test';
import {createSandhi} from '#sandhi';
import {createShraum} from '#shraum';

export const createTest = (url, options) => createPutoutTest(url, {
    ...options,
    runners: {
        when: createSandhi,
        shraum: createShraum,
    },
});
