## Rules

Every rule lives in `lib/sandhi/<group>/apply-<rule>/` and exports:

- `report`: `() => 'name of the sūtra'`
- `nimitta` (optional), then `shraum` or `karya`.

Text is SLP1. Conditions are flat: no `&&` or `||` in `nimitta`, use negated
guards, named built-ins and lookups. Fixtures are `name.js` (input `a, b;`) and
`name-fix.js` (generated with `UPDATE=1 bun run test`). The sūtra number of a
rule is documented in the README rule list.

## Comments

Never write comments, write clear code instead.

## Tests

TDD, Coverage 100%, remove all uncovered code. Less code is better.

## Names

All file names are lower kebab-case

## Commit

Format of the commit message: **type: scope: subject**

**Type**:

- **feature: scope: subject**
- **fix: scope: subject**
- **docs: scope: subject**
- **refactor: scope: subject**
- **test: scope: subject**
- **chore: scope: subject**

**Scope**:
Scope could be anything specifying place of the commit change.
For example util, console, view, edit, style etc...

**Subject text**:

- use imperative, present tense: “change” not “changed” nor “changes”
- don't capitalize first letter
- no dot (.) at the end
  **Message body**:
- just as in <subject> use imperative, present tense: “change” not “changed” nor “changes”
- includes motivation for the change and contrasts with previous behavior
