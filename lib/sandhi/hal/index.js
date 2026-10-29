import * as applyMoNusvara from './apply-mo-nusvara/index.js';
import * as applyAnusvara from './apply-anusvara/index.js';
import * as applyJashtva from './apply-jashtva/index.js';
import * as applyShchtva from './apply-shchutva/index.js';
import * as applyShtutva from './apply-shtutva/index.js';
import * as applyYaroAnunasike from './apply-yaro-anunasike/index.js';
import * as applyUdahSthastambhoh from './apply-udah-sthastambhoh/index.js';
import * as applyNashChavyAprashan from './apply-nash-chavy-aprashan/index.js';
import * as applySamparibhyamKarotau from './apply-samparibhyam-karotau/index.js';
import * as applyUpasargatSatvam from './apply-upasargat-satvam/index.js';
import * as applyShashChoAti from './apply-shash-cho-ati/index.js';
import * as applyJhayoHo from './apply-jhayo-ho/index.js';
import * as applyAnmano from './apply-anmano/index.js';
import * as applyNamuna from './apply-namuna/index.js';
import * as applyPadantadVa from './apply-padantad-va/index.js';
import * as applyCch from './apply-cch/index.js';
import * as applyNatva from './apply-natva/index.js';
import * as applyCharva from './apply-charva/index.js';
import * as applyTopadhasha from './apply-topadhasha/index.js';
import * as applySadiraprateh from './apply-sadiraprateh/index.js';
import * as applyPumahKhayyampare from './apply-pumah-khayyampare/index.js';
import * as applySatvam from './apply-satvam/index.js';

export const rules = {
    'apply-pumah-khayyampare': applyPumahKhayyampare,
    'apply-topadhasha': applyTopadhasha,
    'apply-mo-nusvara': applyMoNusvara,
    'apply-anusvara': applyAnusvara,
    'apply-jashtva': applyJashtva,
    'apply-shchutva': applyShchtva,
    'apply-shtutva': applyShtutva,
    'apply-yaro-anunasike': applyYaroAnunasike,
    'apply-udah-sthastambhoh': applyUdahSthastambhoh,
    'apply-nash-chavy-aprashan': applyNashChavyAprashan,
    'apply-samparibhyam-karotau': applySamparibhyamKarotau,
    'apply-upasargat-satvam': applyUpasargatSatvam,
    'apply-sadiraprateh': applySadiraprateh,
    'apply-shash-cho-ati': applyShashChoAti,
    'apply-jhayo-ho': ['off', applyJhayoHo],
    'apply-anmano': applyAnmano,
    'apply-namuna': applyNamuna,
    'apply-padantad-va': ['off', applyPadantadVa],
    'apply-cch': applyCch,
    'apply-natva': applyNatva,
    'apply-charva': applyCharva,
    'apply-satvam': applySatvam,
};
