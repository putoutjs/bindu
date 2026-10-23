import * as applyAsSandhi from './apply-as-sandhi/index.js';
import * as applyVisargaVoiced from './apply-visarga-voiced/index.js';
import * as applyVisargaVowel from './apply-visarga-vowel/index.js';
import * as applyKharovasana from './apply-kharovasana/index.js';
import * as applyBhobhago from './apply-bhobhago/index.js';
import * as applyRori from './apply-rori/index.js';
import * as applySassa from './apply-sassa/index.js';

export const rules = {
    'apply-bhobhago': applyBhobhago,
    'apply-rori': applyRori,
    'apply-as-sandhi': applyAsSandhi,
    'apply-visarga-voiced': applyVisargaVoiced,
    'apply-visarga-vowel': applyVisargaVowel,
    'apply-kharovasana': applyKharovasana,
    'apply-sassa': applySassa,
};
