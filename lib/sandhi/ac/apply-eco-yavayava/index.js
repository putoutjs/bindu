export const report = () => `eco yavāyāvaḥ`;

export const nimitta = () => [
    ['-', '__inflected(__a)'],
    ['-', '!__ac(__b|1)'],
    ['-', '__pararupa(__a|1, __b|1)'],
];

export const shraum = () => ({
    '(__a|1) === "e"': '__a / 1 + "ay" + __b',
    '(__a|1) === "o"': '__a / 1 + "av" + __b',
    '(__a|1) === "E"': '__a / 1 + "Ay" + __b',
    '(__a|1) === "O"': '__a / 1 + "Av" + __b',
});
