const guard = '!__inflected(__a) && __ac(__b|1)';

export const report = () => `eco yavāyāvaḥ`;

export const shraum = () => ({
    [`${guard} && (__a|1) === "e" && (__b|1) !== "e"`]: '__a / 1 + "ay" + __b',
    [`${guard} && (__a|1) === "o"`]: '__a / 1 + "av" + __b',
    [`${guard} && (__a|2) === "ai"`]: '__a / 1 + "Ay" + __b',
    [`${guard} && (__a|2) === "au"`]: '__a / 1 + "Av" + __b',
});
