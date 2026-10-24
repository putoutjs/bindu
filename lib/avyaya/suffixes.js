const AVYAYA_SUFFIXES = [
    'tvA',
    'ya',
    'tum',
];

export const astiAvyayaSuffix = (word) => {
    for (const suffix of AVYAYA_SUFFIXES)
        if (word.endsWith(suffix))
            return true;
    
    return false;
};
