# createShraum

DSL runner for sandhi rules. A rule is a pair of plain JavaScript expressions, parsed with `putout` and evaluated over the JS AST: no custom syntax, no custom parser.

Use it when a rule only looks at the last sounds of the left word and the first sounds of the right word, and produces one new word. For anything structural use [`createSandhi`](../sandhi/README.md).

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
- Entries are tried in order, the **first matching entry wins**.
- Text is SLP1: `A` ā, `f` ṛ, `x` ḷ, `w` ṭ, `q` ḍ, `R` ṇ, `N` ṅ, `Y` ñ, `z` ṣ, `S` ś, `H` visarga, `M` anusvara.

## How to write a rule

1. Name the two words: `__a` is the left word, `__b` is the right one.
2. Write the **condition**: an expression that evaluates to a boolean.
3. Write the **replacement**: an expression that evaluates to a string. It becomes the new left word.
4. If the replacement mentions `__b`, the right word is consumed (removed). If it never does, the rule is **solo**: the right word stays untouched.

### Words and fragments

| expression    | meaning                                        |
|---------------|------------------------------------------------|
| `__a`         | left word                                      |
| `__b`         | right word                                     |
| `"x"`         | string literal                                 |
| `__a|N`       | last N sounds of `__a`                         |
| `__b|N`       | first N sounds of `__b`                        |
| `__a / N`     | `__a` without its last N sounds                |
| `__b / N`     | `__b` without its first N sounds               |
| `(__a / 1)|1` | slices compose; the root word decides the side |

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

Every built-in starts with `__`. Predicates and lookups take exactly one argument, constants take none.

Predicates, true or false, always false on an empty string:

| name                                      | set                                       |
|-------------------------------------------|-------------------------------------------|
| `__ac` `__ik` `__ak` `__ec`               | vowel pratyāhāras                         |
| `__hal` `__khar` `__ghoshavat` `__ushman` | consonant groups                          |
| `__hrasva` `__aA`                         | short vowels, `a` and `A`                 |
| `__tavarga` `__cavarga` `__tad`           | dental stops, palatal stops, `t` and `d`  |
| `__mum` `__saraphe` `__rasha` `__jhash`   | `m M`, `s r`, `r R S z`, voiced stops     |
| `__pragrhya` `__avyaya` `__inflected`     | word predicates, argument is a whole word |

Lookups, return a string, unknown sounds stay unchanged:

| name                      | result                       |
|---------------------------|------------------------------|
| `__yan` `__guna`          | semivowel, guṇa              |
| `__aghosha` `__jash`      | voiceless, voiced            |
| `__talavya` `__anunasika` | palatal, nasal of the class  |
| `__upper` `__lower`       | `toUpperCase`, `toLowerCase` |

Constants, a string used like an identifier, with no call:

| name         | value                                                                                    |
|--------------|------------------------------------------------------------------------------------------|
| `__avagraha` | avagraha placeholder `__avagraha__`, the same one `preProcess` puts into words, for `o'` |

```js
'(__a|2) === "aH" && __ac(__b|1)': '__a / 2 + "o" + __avagraha + __b / 1',
```

New built-ins go to `builtins.js` with a row in `builtins.spec.js`.

### Several rules, composition

```js
const guard = '!__inflected(__a) && __ac(__b|1)';

export const shraum = () => ({
    [`${guard} && (__a|1) === "e" && (__b|1) !== "e"`]: '__a / 1 + "ay" + __b',
    [`${guard} && (__a|1) === "o"`]: '__a / 1 + "av" + __b',
    '(__a|2) === "aH" && __ac(__b|1)': '__a / 2 + "o" + __avagraha + __b / 1',
});
```

Rules are JavaScript, so constants and template literals are the way to share parts. `__avagraha` is a built-in constant: no import of `#symbols` and no `${avagraha.code}` needed.

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

| file                                        | role                                                          |
|---------------------------------------------|---------------------------------------------------------------|
| `shraum.js`                                 | `createShraum`: compiles entries, delegates to `createSandhi` |
| `evaluate.js`                               | JS AST to closures, one handler per node type                 |
| `builtins.js`                               | predicates and lookups                                        |
| EOF                                         |
| cat > lib/creators/sandhi/README.md <<'EOF' |

## When the rule stays here

`apply-purvarupa` removes the next word through `path.parentPath.node.expressions.pop()`, and `apply-ayadaya` branches on the next word per ending. These are not a condition plus a replacement, so they use `createSandhi` directly.

## API

```js
createSandhi({
    rule,
    options,
    plugin,
    msg,
});
```

Returns `{rule, plugin: {report, fix, traverse}, msg, options}` for putout. `createShraum` calls it with `when`, `then` and `fix` it builds from the DSL.
