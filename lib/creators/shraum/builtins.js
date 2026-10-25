import {avagraha} from '#symbols';
import {pragrhyamAsti} from '#pragrhya';
import {avyayamAsti} from '#avyaya';
import {
    astiAc,
    astiIk,
    astiAk,
    astiEc,
    astiHal,
    astiKhar,
    astiVoicedHal,
    astiShortVowel,
    astiSibilant,
    DENTAL_STOP,
    DENTAL_TD,
    PALATAL_STOP,
    YAN_MAP,
    GUNA,
    VARGA_NASAL,
    KHAR_MAP,
    JASH_MAP,
    PALATAL_MAP,
} from '#pratyahara';
import {praptaPratapadika} from '../../pratipadika.js';

const isUndefined = (a) => typeof a === 'undefined';

const {entries, fromEntries} = Object;

const isIn = (list) => (sound) => list.includes(sound);
const isKeyOf = (map) => (sound) => Boolean(map[sound]);
const lookupOf = (map) => (sound) => map[sound] || sound;

const isInflected = (word) => {
    const stem = praptaPratapadika(word);
    
    return !isUndefined(stem) && stem !== word;
};

const anunasika = (sound) => VARGA_NASAL[sound.toLowerCase()] || sound;
const guard = ([name, predicate]) => [name, (text) => text !== '' && predicate(text)];

const predicates = {
    __ac: astiAc,
    __ik: astiIk,
    __ak: astiAk,
    __ec: astiEc,
    __hal: astiHal,
    __khar: astiKhar,
    __ghoshavat: astiVoicedHal,
    __hrasva: astiShortVowel,
    __ushman: astiSibilant,
    __tavarga: isIn(DENTAL_STOP),
    __cavarga: isIn(PALATAL_STOP),
    __tad: isIn(DENTAL_TD),
    __mum: isIn(['m', 'M']),
    __saraphe: isIn(['s', 'r']),
    __rasha: isIn([
        'r',
        'R',
        'S',
        'z',
    ]),
    __aA: isIn(['a', 'A']),
    __jhash: isKeyOf(KHAR_MAP),
    __pragrhya: pragrhyamAsti,
    __avyaya: avyayamAsti,
    __inflected: isInflected,
};

const lookups = {
    __yan: lookupOf(YAN_MAP),
    __guna: lookupOf(GUNA),
    __aghosha: lookupOf(KHAR_MAP),
    __jash: lookupOf(JASH_MAP),
    __talavya: lookupOf(PALATAL_MAP),
    __anunasika: anunasika,
    __upper: (text) => text.toUpperCase(),
    __lower: (text) => text.toLowerCase(),
};

const constants = {
    __avagraha: avagraha.code,
};

export const builtins = {
    ...fromEntries(
        entries(predicates).map(guard),
    ),
    ...lookups,
    ...constants,
};
