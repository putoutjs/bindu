import {createSandhi} from '#sandhi';
import * as applyAnusvara from './apply-anusvara/index.js';
import * as applyJashtva from './apply-jashtva/index.js';
import * as applyShchtva from './apply-shchtva/index.js';
import * as applyCch from './apply-cch/index.js';

export const rules = {
    'apply-anusvara': createSandhi(applyAnusvara),
    'apply-jashtva': createSandhi(applyJashtva),
    'apply-shchtva': createSandhi(applyShchtva),
    'apply-cch': createSandhi(applyCch),
};
