export const parse = (sutra) => sutra.split('.').map(Number);

export const compareSutra = (a, b) => {
    const [x, y] = [parse(a), parse(b)];
    const index = x.findIndex((n, i) => n !== y[i]);

    if (index === -1)
        return 0;

    return x[index] - y[index];
};

export const isTripadi = (sutra) => compareSutra(sutra, '8.2.1') >= 0;
