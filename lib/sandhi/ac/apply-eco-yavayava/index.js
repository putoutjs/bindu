export const report = () => `eco yavāyāvaḥ`;
export const sutra = () => '6.1.78';

export const nimitta = () => [
    ['-', '__inflected(__a)'],
    ['-', '!__ac(__b|1)'],
];

export const shraum = () => ({
    '(__a|1) === "e" && (__b|1) !== "e"': '__a / 1 + "ay" + __b',
    '(__a|1) === "o"': '__a / 1 + "av" + __b',
    '(__a|2) === "ai"': '__a / 1 + "Ay" + __b',
    '(__a|2) === "au"': '__a / 1 + "Av" + __b',
});
