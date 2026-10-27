import * as applyAnusvara from './apply-anusvara/index.js';
import * as applyJashtva from './apply-jashtva/index.js';
import * as applyShchtva from './apply-shchutva/index.js';
import * as applyCch from './apply-cch/index.js';
import * as applyNatva from './apply-natva/index.js';
import * as applyCharva from './apply-charva/index.js';
import * as applyTopadhasha from './apply-topadhasha/index.js';
import * as applySatvam from './apply-satvam/index.js';

export const rules = {
    'apply-topadhasha': applyTopadhasha,
    'apply-anusvara': applyAnusvara,
    'apply-jashtva': applyJashtva,
    'apply-shchutva': applyShchtva,
    'apply-cch': applyCch,
    'apply-natva': applyNatva,
    'apply-charva': applyCharva,
    'apply-satvam': applySatvam,
};
