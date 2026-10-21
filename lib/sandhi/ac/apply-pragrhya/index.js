import {astiPragrhya} from '#pratyahara';
import {pragrhyamAsti} from '#pragrhya';

export const report = () => `ādguṇaḥ pragṛhya`;

// Pragrhya (pragṛhya) words are exempt from sandhi (1.1.11, 1.1.14).
//
// This rule does not change anything by itself: it only marks the word
// as pragrhya, so that `apply-yan`, `apply-dirgha` and `apply-purvarupa`
// skip it and the final vowel stays separate.
export const when = ({name, last, first}) => pragrhyamAsti(name) && astiPragrhya(last) && /[aAiIuUfFxXeEoO]/.test(first);

export const fix = () => {};
