import {
    checkRunners,
    compilePairs,
    createWithRules,
    splitNimitta,
} from '#shraum';

const toPair = (karya) => (condition) => [condition, karya];

export const createGlaum = ({rule, options, plugin, msg}) => {
    checkRunners(plugin);
    
    const {guards, cases} = splitNimitta(plugin.nimitta());
    
    if (!cases.length)
        throw SyntaxError('Expected at least one + line in nimitta');
    
    return createWithRules({
        rule,
        options,
        msg,
        report: plugin.report,
        rules: compilePairs(cases.map(toPair(plugin.karya())), guards),
    });
};
