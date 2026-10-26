const isMinus = ([sign]) => sign === '-';
const isPlus = ([sign]) => sign === '+';
const isUnknown = (line) => !isMinus(line) && !isPlus(line);
const toCondition = ([, condition]) => condition;

const checkSigns = (lines) => {
    const unknown = lines.find(isUnknown);
    
    if (unknown)
        throw SyntaxError(`Expected + or - in nimitta, got ${unknown[0]}`);
};

const checkOrder = (lines) => {
    const first = lines.findIndex(isPlus);
    
    if (first !== -1 && lines.slice(first).some(isMinus))
        throw SyntaxError('Put - lines before + lines in nimitta');
};

export const splitNimitta = (lines) => {
    checkSigns(lines);
    checkOrder(lines);
    
    return {
        guards: lines
            .filter(isMinus)
            .map(toCondition),
        cases: lines
            .filter(isPlus)
            .map(toCondition),
    };
};
