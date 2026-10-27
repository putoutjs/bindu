## Rules

All rules export `report` and `sutra`. Conditions are flat, text is SLP1, and
every rule lives under `lib/sandhi/<group>/apply-<rule>/`. A group spec
(`lib/sandhi/<group>/index.spec.js`) walks every plugin and asserts it exports
`report` and `sutra`, and the README "Plugin shape" table documents each rule
with its sūtra number.

- `report`: a human-readable name for the sūtra.
- `sutra`: the sūtra number, e.g. `'8.2.39'`.
- Conditions use only flat predicates and lookups, no nested logic.
- Fixtures are in SLP1 and come in pairs: `fixture.js` (input) and
  `fixture-<something>.js` (expected output), separated by `;`.

Docs: `lib/runners/sandhi/README.md` "Plugin shape" gets a `sutra` row.

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
