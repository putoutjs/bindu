import {createSandhi} from '#sandhi';
import * as applyAnusvara from './apply-anusvara/index.js';
import * as applyJashtva from './apply-jashtva/index.js';
import * as applyShchtva from './apply-shchtva/index.js';
import * as applyCch from './apply-cch/index.js';
import * as applyNatva from './apply-natva/index.js';
import * as applyCharva from './apply-charva/index.js';
import * as applyTopadhasha from './apply-topadhasha/index.js';

export const rules = {
    'apply-topadhasha': createSandhi(applyTopadhasha),
    'apply-anusvara': createSandhi(applyAnusvara),
    'apply-jashtva': createSandhi(applyJashtva),
    'apply-shchtva': createSandhi(applyShchtva),
    'apply-cch': createSandhi(applyCch),
    'apply-natva': createSandhi(applyNatva),
    'apply-charva': createSandhi(applyCharva),
};
