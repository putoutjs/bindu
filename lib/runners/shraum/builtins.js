import {avagraha, hiatus} from '#symbols';
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
    MURDHANYA,
    SHCU,
    KU_PU,
    KHAY,
    CHAV,
    MURDHANYA_MAP,
    VRIDDHI,
} from '#pratyahara';
import {praptaPratapadika} from '../../pratipadika.js';

const isNaschavy = (a, b) => a === 'n' && isIn(CHAV)(b);

const isKarotau = (a, b) => isIn(['sam', 'pari'])(a) && b.startsWith('kf');

const isShashcho = (a, b) => isIn(KHAY)(a) && b.startsWith('S') && astiAc(b.at(1) || '-');

const isPararupa = (a, b) => isIn(['e', 'o'])(a) && b === 'a';

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
const isEmpty = (text) => text === '';
const isSavarna = (a, b) => a.toLowerCase() === b.toLowerCase();
const guard = ([name, predicate]) => [name, (...texts) => !texts.some(isEmpty) && predicate(...texts)];

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
    __nasal: isIn([
        'N',
        'Y',
        'R',
        'n',
        'm',
    ]),
    __apratyaya: isIn([
        'niH',
        'duH',
        'bahiH',
        'AviH',
        'prAduH',
        'catuH',
    ]),
    __ud: isIn(['ud', 'ut']),
    __inku: isIn([
        'aBi',
        'prati',
        'pari',
        'ni',
        'vi',
        'ati',
        'aDi',
        'api',
        'su',
    ]),
    __upasarga: isIn([
        'nis',
        'dus',
        'bahis',
        'Avis',
        'prAdus',
    ]),
    __jhash: isKeyOf(KHAR_MAP),
    __savarna: isSavarna,
    __pragrhya: pragrhyamAsti,
    __avyaya: avyayamAsti,
    __inflected: isInflected,
    __stu: isKeyOf(PALATAL_MAP),
    __scuna: (stu, scu) => isKeyOf(PALATAL_MAP)(stu) && isIn(SHCU)(scu),
    __shtuna: (stu, shtu) => isKeyOf(PALATAL_MAP)(stu) && isIn(MURDHANYA)(shtu),
    __kupu: isIn(KU_PU),
    __shcu: isIn(SHCU),
    __khay: isIn(KHAY),
    __murdhanya: isIn(MURDHANYA),
    __pararupa: isPararupa,
    __shashcho: isShashcho,
    __karotau: isKarotau,
    __naschavy: isNaschavy,
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
    __ttva: lookupOf(MURDHANYA_MAP),
    __vriddhi: lookupOf(VRIDDHI),
};

const constants = {
    __avagraha: avagraha.code,
    __hiatus: hiatus.code,
};

export const builtins = {
    ...fromEntries(
        entries(predicates).map(guard),
    ),
    ...lookups,
    ...constants,
};
