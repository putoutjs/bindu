# createGlaum

Runner for sandhi rules with one result for all matching cases. The rule has two parts: *nimitta*, the condition that lets the rule apply, and *karya*, the operation that makes the new word.

Use it when one result fits every case. When each case has its own result, use [`createShraum`](../shraum/README.md). For anything structural use [`createSandhi`](../sandhi/README.md).

## Plugin shape

```js
export const report = () => `akaḥ savarṇe dīrghaḥ`;

export const nimitta = () => [
    ['-', '__avyaya(__b)'],
    ['-', '__pragrhya(__a)'],
    ['-', '!__ak(__a|1)'],
    ['+', '__savarna(__a|1, __b|1)'],
];

export const karya = () => '__a / 1 + __upper(__a|1) + __b / 1';
```

- `report` is the message of the rule (sūtra).
- The plugin **must export `karya`**: putout selects the runner by export name.
- A plugin exports `karya` or `shraum`, never both.
- Text is SLP1: `A` ā, `f` ṛ, `x` ḷ, `w` ṭ, `q` ḍ, `R` ṇ, `N` ṅ, `Y` ñ, `z` ṣ, `S` ś, `H` visarga, `M` anusvara.

## nimitta

`nimitta()` returns a list of signed lines: `[sign, condition]`. Each condition is a JavaScript expression that evaluates to a boolean. Words, fragments, operators and built-ins are the same as in [`createShraum`](../shraum/README.md).

| sign | name        | meaning                                               |
|------|-------------|-------------------------------------------------------|
| `-`  | guard       | When the condition is true, the rule stops.           |
| `+`  | alternative | When the condition is true, the rule applies `karya`. |

Rules for the list:

1. Write all `-` lines before all `+` lines. The reverse is an error.
2. Write at least one `+` line. A list with only guards is an error.
3. The first true `-` line stops the rule. The `+` lines are alternatives: one true line is enough.
4. Any other sign is an error.

## karya

`karya()` returns one expression that evaluates to a string. The string becomes the new left word.

- If `karya` mentions `__b`, the rule removes the right word.
- If `karya` never mentions `__b`, the rule is **solo**: the right word stays.
- A solo rule must not match its own output. putout applies fixes until the code stops changing.

## Example: several alternatives

```js
export const report = () => `bhobhago’gho’pūrvasya yo’śi`;

export const nimitta = () => [
    ['-', '!__ac(__b|1)'],
    ['+', '__a === "bhoH"'],
    ['+', '__a === "bhagoH"'],
    ['+', '__a === "aghoH"'],
    ['+', '__a === "namaH"'],
];

export const karya = () => `__a / 2 + "o'" + __b`;
```

The rule checks the guard first. It then checks the alternatives in order. If one matches, it applies `karya`.

## Choose the format

| situation                                       | runner                               |
|-------------------------------------------------|--------------------------------------|
| One result for all matching cases               | `createGlaum`: `nimitta` + `karya`   |
| Several results with a shared condition         | `createShraum`: `nimitta` + `shraum` |
| Several results, no shared condition            | `createShraum`: `shraum`             |
| Other AST nodes, dictionaries, shared computing | `createSandhi`                       |

## Test a rule

Put the spec and the fixtures next to the rule. `UPDATE=1 npm test` writes the `-fix` fixtures.

```js
import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-dirgha', plugin],
    ],
});

test('bindu: sandhi: apply-dirgha: report', (t) => {
    t.report('apply-dirgha', 'akaḥ savarṇe dīrghaḥ');
    t.end();
});

test('bindu: sandhi: apply-dirgha: transform', (t) => {
    t.transform('apply-dirgha');
    t.end();
});

test('bindu: sandhi: apply-dirgha: no report: no-ac', (t) => {
    t.noReport('no-ac');
    t.end();
});
```

Add one fixture for each `+` line and one for each `-` line. Coverage must stay at 100%.

## Internals

| file         | role                                                                         |
|--------------|------------------------------------------------------------------------------|
| `glaum.js`   | `createGlaum`: turns each `+` line into a case, delegates to the Shraum core |
| `../shraum/` | `nimitta.js` splits the lines. `shraum.js` compiles and runs the rules.      |
