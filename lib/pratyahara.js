const ac = [
    'a',
    'i',
    'u',
    'f',
    'x',
    'e',
    'o',
    'ai',
    'au',
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

export const astiAc = createAsti(ac);
export const astiKhar = createAsti(khar);
