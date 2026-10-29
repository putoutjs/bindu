# createShraum

DSL runner for sandhi rules. A rule is a pair of plain JavaScript expressions, parsed with `putout` and evaluated over the JS AST: no custom syntax, no custom parser.

Use it when a rule only looks at the last sounds of the left word and the first sounds of the right word, and produces one new word. When one result fits every case, use [`createGlaum`](../glaum/README.md). For anything structural use [`createSandhi`](../sandhi/README.md).

## Plugin shape

```js
export const report = () => 'iko yaṇaci';

export const shraum = () => ({
    '__ik(__a|1) && __ac(__b|1)': '__a / 1 + __yan(__a|1) + __b',
});
```

- `report` is the message of the rule (sūtra).
- The plugin **must export `shraum`**: putout selects the runner by export name.
- `shraum()` returns an object: `condition: replacement`.
- The plugin can also export `nimitta`: guards shared by all cases, see below.
- Entries are tried in order, the **first matching entry wins**.
- Text is SLP1: `A` ā, `f` ṛ, `x` ḷ, `w` ṭ, `q` ḍ, `R` ṇ, `N` ṅ, `Y` ñ, `z` ṣ, `S` ś, `H` visarga, `M` anusvara.

## How to write a rule

1. Name the two words: `__a` is the left word, `__b` is the right one.
2. Write the **condition**: an expression that evaluates to a boolean.
3. Write the **replacement**: an expression that evaluates to a string. It becomes the new left word.
4. If the replacement mentions `__b`, the right word is consumed (removed). If it never does, the rule is **solo**: the right word stays untouched.

### Words and fragments

| expression | meaning                          |
|------------|----------------------------------|
| `__a`      | left word                        |
| `__b`      | right word                       |
| `"x"`      | string literal                   |
| `__a       | N`                               | last N sounds of `__a`                         |
| `__b       | N`                               | first N sounds of `__b`                        |
| `__a / N`  | `__a` without its last N sounds  |
| `__b / N`  | `__b` without its first N sounds |
| `(__a / 1) | 1`                               | slices compose; the root word decides the side |

`N` is a numeric literal on the right. A shortage gives an empty string: `__a|2` on a one-sound word is `''`.

### Operators

`+` concatenates. `===`, `!==`, `&&`, `||` and `!` mean what they mean in JavaScript. Anything else is a `SyntaxError`.

JavaScript precedence applies. `|` is weaker than `===`, `!==` and `+`, so wrap it there:

```
'(__a|1) === "H" && __ac(__b|1)': '__a / 1 + "r" + __b',
'(__a|2) === "aH"': '__a / 2 + (__b|1) + __b',
```

As the only call argument, or after a `/` chain, no parentheses are needed: `__ik(__a|1)`, `__ik(__a / 1|1)`. `/` is stronger than `+`, so `__a / 1 + "r"` needs none.

### Built-ins

Every built-in starts with `__`. Predicates and lookups take one or more arguments, constants take none.

Predicates, true or false, always false on an empty string:

| name                                      | set                                       |
|-------------------------------------------|-------------------------------------------|
| `__ac` `__ik` `__ak` `__ec`               | vowel pratyāhāras                         |
| `__hal` `__khar` `__ghoshavat` `__ushman` | consonant groups                          |
| `__hrasva` `__dirgha` `__aA` `__nasal`    | short vowels, long vowels, `a` and `A`, nasal consonants |
| `__tavarga` `__tad`                       | dental stops, `t` and `d`                 |
| `__saraphe` `__rasha` `__jhash`           | `s r`, `r R S z`, voiced stops            |
| `__savarna`                               | two sounds, equal ignoring case           |
| `__shcu` `__kupu` `__khay` `__jhay` `__sparsha` `__tu` | `c` and palatals, `k kh p ph`, stops, stops without nasals, stops with nasals, retroflex stops |
| `__shtuna` `__pararupa` `__naschavy` | relations between two sounds, named after the sūtra |
| `__saH` `__pragrhya` `__avyaya` `__inflected` `__upasarga` `__apratyaya` `__ud` `__nam` `__etattad` `__bhobhago` `__ang` `__karotau` `__napadantat` `__inku` `__shashcho` `__kharshar` `__pum` `__pums` `__khayam` | word predicates, argument is a whole word |

A predicate gets its arguments in order and is false when any of them is an empty string. Several arguments read like the sūtra:

```js
export const nimitta = () => [
    ['-', '!__ak(__a|1)'],
];

export const shraum = () => ({
    '__savarna(__a|1, __b|1)': '__a / 1 + __upper(__a|1) + __b / 1',
});
```

A call needs at least one argument. Built-ins that take one value ignore the rest.

Lookups, return a string, unknown sounds stay unchanged:

| name                      | result                       |
|---------------------------|------------------------------|
| `__yan` `__guna`          | semivowel, guṇa              |
| `__aghosha` `__jash` `__mahaprana` | voiceless, voiced, aspirated voiced |
| `__talavya` `__anunasika` | palatal, nasal of the class  |
| `__upper`                 | `toUpperCase`                |
| `__vriddhi`               | vṛddhi of `e o E O`          |
| `__ttva`                  | retroflex of `s` and dentals |

Constants, a string used like an identifier, with no call:

| name         | value                                                                                    |
|--------------|------------------------------------------------------------------------------------------|
| `__avagraha` | avagraha placeholder `__avagraha__`, the same one `preProcess` puts into words, for `o'` |
| `__hiatus` | hiatus placeholder `__hiatus__`, printed as a space between two vowels that stay apart (`rAmA asti`) |
| `__danda` | pause placeholder `__danda__`: `preProcess` puts it after the last word before a punctuation mark; `__b === __danda` tells a rule that a pause follows |

```js
export const nimitta = () => [
    ['-', '(__a|2) !== "aH"'],
];

export const shraum = () => ({
    '__ac(__b|1)': '__a / 2 + "o" + __avagraha + __b / 1',
});
```

New built-ins go to `builtins.js` with a row in `builtins.spec.js`.

### Several rules

```js
export const shraum = () => ({
    '(__a|1) === "e"': '__a / 1 + "ay" + __b',
    '(__a|1) === "o"': '__a / 1 + "av" + __b',
});
```

Rules are JavaScript, so constants and template literals are the way to share parts. `__avagraha` is a built-in constant: no import of `#symbols` and no `${avagraha.code}` needed.

### Pair result

When a rule changes both words and the right word has to stay, write an array of two strings. Both words are kept and replaced, the rule is never solo:

```js
export const shraum = () => ({
    '__tavarga(__a|1)': '[__a / 1 + __ttva(__a|1), __b]',
});
```

## Shared guards: nimitta

When several cases repeat the same condition, move it to `nimitta`. *Nimitta* is the condition that lets a rule apply. It is a list of signed lines `[sign, condition]`:

```js
export const report = () => `vṛddhireci`;

export const nimitta = () => [
    ['-', '!__aA(__a|1)'],
    ['-', '!__ec(__b|1)'],
];

export const shraum = () => ({
    '__ec(__b|1)': '__a / 1 + __vriddhi(__b|1) + __b / 1',
});
```

- A `-` line is a guard. When its condition is true, the rule stops and no case is tried.
- With `shraum`, `nimitta` has `-` lines only. A `+` line is an error: case conditions live in `shraum`.
- Guards run before the cases. They are written first, so the reader sees the exclusions first.
- A guard can look at both words, like a case. A guard that is not a boolean throws a `TypeError`.
- For one result and several alternatives, use `+` lines in [`createGlaum`](../glaum/README.md).

Move a condition to `nimitta` when it removes repetition. Keep conditions that belong to one case in `shraum`.

## Pitfall: a solo rule must not match its own output

putout applies fixes until the code stops changing. A solo rule keeps the right word, so its output is checked again. Make the output fail the condition:

```
'__saraphe(__a|1) && __khar(__b|1)': '__a / 1 + "H"',
```

`s` or `r` is replaced with `H`, `H` is not in `__saraphe`, the rule stops.

## Test a rule

Spec and fixtures live next to the rule. `UPDATE=1 npm test` writes the `-fix` fixtures.

```js
import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-yan', plugin],
    ],
});

test('bindu: sandhi: apply-yan: report', (t) => {
    t.report('apply-yan', 'iko yaṇaci');
    t.end();
});

test('bindu: sandhi: apply-yan: transform', (t) => {
    t.transform('apply-yan');
    t.end();
});

test('bindu: sandhi: apply-yan: no report: no-ac', (t) => {
    t.noReport('no-ac');
    t.end();
});
```

`fixture/apply-yan.js`:

```
ki, iti;
```

`fixture/apply-yan-fix.js` is generated:

```js
kyiti;
```

`#test` already registers the `shraum` runner. The runner is registered the same way in `lib/bindu.js`.

## Internals

| file          | role                                                            |
|---------------|-----------------------------------------------------------------|
| `shraum.js`   | `createShraum`: compiles entries, delegates to `createSandhi`   |
| `evaluate.js` | JS AST to closures, one handler per node type                   |
| `builtins.js` | predicates and lookups                                          |
| `nimitta.js`  | splits `nimitta` lines into guards and cases, shared with Glaum |

## Flat conditions

Keep every `nimitta` line and every case key one test: no `&&`, no `||`.

| need                              | write                                                                              |
|-----------------------------------|------------------------------------------------------------------------------------|
| left sound must be `H`            | guard `['-', '(__a|1) !== "H"']`, the case tests only the right word               |
| left word must be `aH`            | guard `['-', '(__a|2) !== "aH"']`                                                   |
| relation between two sounds       | named built-in with the sūtra's name: `__pararupa(__a|1, __b|1)`                   |
| one of several sounds             | lookup (`__vriddhi`) or a predicate over a list (`__kupu`)                         |
| same exception in two rules       | the same predicate: guard in the utsarga, case in the apavāda                      |

`apply-eco-yavayava` (6.1.78), the exception is a guard:

```js
export const nimitta = () => [
    ['-', '__pararupa(__a|1, __b|1)'],
];
```

`apply-padantad` (6.1.109), the same predicate is the case:

```js
export const nimitta = () => [
    ['+', '__pararupa(__a|1, __b|1)'],
];
```

`__pararupa` is case-sensitive on purpose: `__ec` and friends lowercase their input, and `nE a` must not hit the exception of 6.1.109.
