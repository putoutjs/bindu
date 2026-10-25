# createSandhi

Runner for sandhi rules written as plain code. For every word that has a next word in a sequence, it asks the rule whether it applies and lets the rule rewrite the pair.

Prefer [`createShraum`](../shraum/README.md) when the rule is a condition and a replacement string. Use `createSandhi` when the rule needs real code: other AST nodes, dictionaries, several branches sharing a computation.

## What the runner sees

Words are identifiers in a sequence expression, separated by commas: `rAma, iva;`. For each identifier whose parent is a `SequenceExpression` and that has a next sibling, the runner builds a context:

| field      | value                         |
|------------|-------------------------------|
| `name`     | the word                      |
| `nextName` | the next word                 |
| `last`     | last character of `name`      |
| `first`    | first character of `nextName` |
| `preLast`  | character before `last`       |

Text is SLP1: `A` ā, `f` ṛ, `x` ḷ, `w` ṭ, `q` ḍ, `R` ṇ, `N` ṅ, `Y` ñ, `z` ṣ, `S` ś, `H` visarga, `M` anusvara. `#pratyahara` exports the sets, maps and `asti*` predicates; most of them lowercase their input.

## Plugin shape

```js
import {operator} from 'putout';
import {GUNA, astiIk} from '#pratyahara';

const {remove} = operator;

export const report = () => 'ād‑guṇaḥ';

export const when = ({last, first}) => (last === 'a' || last === 'A') && astiIk(first);

export const then = ({first}) => ({
    guna: GUNA[first],
});

export const fix = ({path, next, name, nextName, guna}) => {
    path.node.name = `${name.slice(0, -1)}${guna}${nextName.slice(1)}`;
    remove(next);
};
```

| export         | called         | purpose                        |
|----------------|----------------|--------------------------------|
| `report`       | on a match     | message of the rule            |
| `when(ctx)`    | for every pair | `true` if the rule applies     |
| `then(ctx)`    | after `when`   | optional, returns extra fields |
| `fix(payload)` | on `--fix`     | rewrites the code              |

`fix` receives `{path, next, ...ctx, ...then result}`, where `path` is the left identifier and `next` is the right one.

## How to write a rule

1. Write `when` from the first and last sounds. Every check that needs the whole word uses `name` or `nextName`.
2. Compute what you need once in `then`; `fix` should only assemble and assign.
3. In `fix` set `path.node.name` to the new word. Call `remove(next)` when the right word was merged in. Skip it to keep the right word (a solo rule, like `apply-kharovasana`).
4. Do not write comments, name the pieces instead.

Make sure the result does not satisfy `when` again: putout applies fixes until the code is stable.

## Register the rule

Each group has an `index.js` with a `rules` map:

```js
import * as applyGuna from './apply-guna/index.js';

export const rules = {
    'apply-guna': applyGuna,
};
```

Groups are plugged into `lib/bindu.js`:

```
plugins: [
    ['sandhi/ac', acSandhi],
    ['sandhi/visarga', visargaSandhi],
    ['sandhi/hal', halSandhi],
],
```

## Test a rule

`#test` registers the runners. Spec and fixtures live next to the rule; `UPDATE=1 npm test` writes the `-fix` fixtures.

```js
import {createTest} from '#test';
import * as plugin from './index.js';

const test = createTest(import.meta.url, {
    plugins: [
        ['apply-guna', plugin],
    ],
});

test('bindu: sandhi: apply-guna: report', (t) => {
    t.report('apply-guna', 'ād‑guṇaḥ');
    t.end();
});

test('bindu: sandhi: apply-guna: transform', (t) => {
    t.transform('apply-guna');
    t.end();
});

test('bindu: sandhi: apply-guna: no report: no-a-last', (t) => {
    t.noReport('no-a-last');
    t.end();
});
```

Fixtures: `fixture/apply-guna.js` holds `deva, indra;`, `fixture/apply-guna-fix.js` is generated. Coverage must stay at 100%: add a fixture for every branch.
