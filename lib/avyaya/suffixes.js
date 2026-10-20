// Avyaya verb forms are recognized by their endings.
//
// This is a heuristic, not a full morphological analysis:
// - `tvA` — ktvā (having done): kftvA, gatvA, dfzwvA
// - `ya` — lyap (having done, after a prefix): Agamya, AdAya
// - `tum` — tumun (in order to do): gantum, kartum
//
// Panini 1.1.40 (ktvātosunkasunaḥ) names only ktvā, tosun and kasun,
// lyap is formed by 7.1.37 and related sutras, tumun by 3.3.10,
// so these are three different suffix classes that all produce avyaya forms.
//
// Known limitation: `endsWith('ya')` matches some non-avyaya words
// (e.g. `satya`). This is acceptable for a sandhi engine heuristic.
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
