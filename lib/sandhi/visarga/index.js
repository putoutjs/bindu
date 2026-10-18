import {createSandhi} from '#sandhi';
import * as applyVisargaVoiced from './apply-visarga-voiced/index.js';
import * as applyVisargaVowel from './apply-visarga-vowel/index.js';
import * as applyKharovasana from './apply-kharovasana/index.js';
import * as applyBhobhago from './apply-bhobhago/index.js';
import * as applyRori from './apply-rori/index.js';
import * as applySassa from './apply-sassa/index.js';

export const rules = {
    'apply-bhobhago': createSandhi(applyBhobhago),
    'apply-rori': createSandhi(applyRori),
    'apply-kharovasana': createSandhi(applyKharovasana),
    'apply-visarga-voiced': createSandhi(applyVisargaVoiced),
    'apply-visarga-vowel': createSandhi(applyVisargaVowel),
    'apply-sassa': createSandhi(applySassa),
};
