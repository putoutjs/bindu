const ec = [
    'e',
    'o',
    'ai',
    'au',
];

const ac = [
    'a',
    'i',
    'u',
    'f',
    'x',
    ...ec,
];

const ik = [
    'i',
    'I',
    'u',
    'U',
    'f',
    'F',
    'x',
];

const en = [
    'e',
    'o',
];

const EN = [
    'E',
    'O',
];

const ak = [
    'a',
    'A',
    'i',
    'I',
    'u',
    'U',
    'f',
    'F',
    'x',
];

const khar = [
    'k',
    'c',
    'w',
    't',
    'p',
    'z',
    's',
];

const createAsti = (a) => (b) => a.includes(b.toLowerCase());

export const GUNA = {
    i: 'e',
    I: 'e',
    u: 'o',
    U: 'o',
    f: 'ar',
    F: 'ar',
    x: 'al',
};

export const VRIDDHI = {
    e: 'E',
    o: 'O',
    E: 'E',
    O: 'O',
};

export const YAN_MAP = {
    i: 'y',
    I: 'y',
    u: 'v',
    U: 'v',
    f: 'r',
    F: 'r',
    x: 'l',
};

export const DIRGHA_MAP = {
    a: 'A',
    A: 'A',
    i: 'I',
    I: 'I',
    u: 'U',
    U: 'U',
    f: 'F',
    F: 'F',
    x: 'x',
};

export const astiAc = createAsti(ac);
export const astiEc = createAsti(ec);
export const astiKhar = createAsti(khar);
export const astiIk = createAsti(ik);
export const astiEn = createAsti(en);
export const astiEN = createAsti(EN);
export const astiAk = createAsti(ak);

export const HAL = 'kKgGNcCjJYwWqQRtTdDnpPbBmyrlvzSsh'.split('');

export const CAR = [
    'k',
    'K',
    'c',
    'C',
    'w',
    'W',
    't',
    'T',
    'p',
    'P',
    'z',
    'S',
    's',
];

export const JASH_MAP = {
    k: 'g',
    K: 'G',
    c: 'j',
    C: 'J',
    w: 'q',
    W: 'Q',
    t: 'd',
    T: 'D',
    p: 'b',
    P: 'B',
    z: 'j',
    S: 'q',
    s: 'd',
};

export const KHAR = [
    'k',
    'K',
    'c',
    'C',
    'w',
    'W',
    't',
    'T',
    'p',
    'P',
    'z',
    'S',
    's',
];

export const KHAR_MAP = {
    g: 'k',
    G: 'K',
    j: 'c',
    J: 'C',
    q: 'w',
    Q: 'W',
    d: 't',
    D: 'T',
    b: 'p',
    B: 'P',
};

export const VARGA_NASAL = {
    k: 'N',
    K: 'N',
    g: 'N',
    G: 'N',
    N: 'N',
    c: 'Y',
    C: 'Y',
    j: 'Y',
    J: 'Y',
    Y: 'Y',
    w: 'R',
    W: 'R',
    q: 'R',
    Q: 'R',
    R: 'R',
    t: 'n',
    T: 'n',
    d: 'n',
    D: 'n',
    n: 'n',
    p: 'm',
    P: 'm',
    b: 'm',
    B: 'm',
    m: 'm',
    y: 'Y',
    v: 'm',
    r: 'R',
    l: 'n',
    z: 'Y',
    S: 'R',
    s: 'n',
    h: 'N',
};

export const astiHal = createAsti(HAL);
export const astiCar = (c) => CAR.includes(c);

export const VOICED_HAL = [
    'g',
    'G',
    'j',
    'J',
    'q',
    'Q',
    'd',
    'D',
    'b',
    'B',
    'n',
    'N',
    'm',
    'Y',
    'R',
    'y',
    'r',
    'l',
    'v',
    'h',
];

export const SIBILANT = ['s', 'S', 'z'];

export const DENTAL_TD = [
    't',
    'd',
];

export const DENTAL_STOP = [
    't',
    'T',
    'd',
    'D',
    'n',
];

export const PALATAL_STOP = [
    'c',
    'C',
    'j',
    'J',
    'Y',
];

export const PALATAL_MAP = {
    t: 'c',
    T: 'C',
    d: 'j',
    D: 'J',
    n: 'Y',
};

export const SHORT_VOWEL = [
    'a',
    'i',
    'u',
    'f',
    'x',
];

export const astiVoicedHal = (c) => VOICED_HAL.includes(c);
export const astiSibilant = (c) => SIBILANT.includes(c);
export const astiShortVowel = (c) => SHORT_VOWEL.includes(c);

// Pragrhya (pragṛhya) — endings exempt from sandhi (1.1.11, 1.1.14).
//
// Such a word keeps its final vowel separate: it never merges with the next
// word, so `apply-yan`, `apply-dirgha` and `apply-purvarupa` are blocked.
//
// The ending alone is not enough to recognize a pragrhya word, so it is
// combined with the word list from `lib/pragrhya`.
export const PRAGRHYA = [
    'I',
    'U',
    'E',
    'e',
    'o',
];

export const astiPragrhya = (c) => PRAGRHYA.includes(c);
