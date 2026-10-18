import {createSandhi} from '#sandhi';
import * as applyKharovasana from './apply-kharovasana/index.js';
import * as applyBhobhago from './apply-bhobhago/index.js';
import * as applyRori from './apply-rori/index.js';

export const rules = {
    'apply-bhobhago': createSandhi(applyBhobhago),
    'apply-rori': createSandhi(applyRori),
    'apply-kharovasana': createSandhi(applyKharovasana),
};
