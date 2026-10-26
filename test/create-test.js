import {createTest as createPutoutTest} from '@putout/test';
import {createSandhi} from '#sandhi';
import {createShraum} from '#shraum';
import {createGlaum} from '#glaum';

export const createTest = (url, options) => createPutoutTest(url, {
    ...options,
    runners: {
        when: createSandhi,
        shraum: createShraum,
        karya: createGlaum,
    },
});
