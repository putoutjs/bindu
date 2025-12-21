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
export const astiEc = createAsti(ec);
export const astiKhar = createAsti(khar);
