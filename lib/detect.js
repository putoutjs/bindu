const DEVANAGARI = /[\u0900-\u097F]/;
const IAST = /[āīūṛṝḷḹṃṁḥṅñṭḍṇśṣ]/i;

export const detect = (text) => {
    if (DEVANAGARI.test(text))
        return 'devanagari';
    
    if (IAST.test(text.normalize('NFC')))
        return 'iast';
    
    return 'slp1';
};
