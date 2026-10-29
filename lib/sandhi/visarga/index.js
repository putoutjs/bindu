import * as applyEtatTadoh from './apply-etat-tadoh/index.js';
import * as applyAhSandhi from './apply-ah-sandhi/index.js';
import * as applyRoriDirgha from './apply-rori-dirgha/index.js';
import * as applyVisargaSha from './apply-visarga-sha/index.js';
import * as applyAsSandhi from './apply-as-sandhi/index.js';
import * as applyVisargaVoiced from './apply-visarga-voiced/index.js';
import * as applyVisargaVowel from './apply-visarga-vowel/index.js';
import * as applyKharovasana from './apply-kharovasana/index.js';
import * as applyBhobhago from './apply-bhobhago/index.js';
import * as applyRori from './apply-rori/index.js';
import * as applySassa from './apply-sassa/index.js';

export const rules = {
    'apply-etat-tadoh': applyEtatTadoh,
    'apply-bhobhago': applyBhobhago,
    'apply-rori': applyRori,
    'apply-ah-sandhi': applyAhSandhi,
    'apply-rori-dirgha': applyRoriDirgha,
    'apply-visarga-sha': applyVisargaSha,
    'apply-as-sandhi': applyAsSandhi,
    'apply-visarga-voiced': applyVisargaVoiced,
    'apply-visarga-vowel': applyVisargaVowel,
    'apply-kharovasana': applyKharovasana,
    'apply-sassa': applySassa,
};
