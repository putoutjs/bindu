# Bindu [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[NPMURL]: https://npmjs.org/package/bindu "npm"
[NPMIMGURL]: https://img.shields.io/npm/v/bindu.svg?style=flat
[BuildStatusURL]: https://github.com/putoutjs/bindu/actions/workflows/nodejs.yml "Build Status"
[BuildStatusIMGURL]: https://github.com/putoutjs/bindu/actions/workflows/nodejs.yml/badge.svg
[LicenseURL]: https://tldrlegal.com/license/mit-license "MIT License"
[LicenseIMGURL]: https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[CoverageURL]: https://coveralls.io/github/putoutjs/bindu?branch=master
[CoverageIMGURL]: https://coveralls.io/repos/putoutjs/bindu/badge.svg?branch=master&service=github

<img width="314" height="235" alt="image" src="https://github.com/user-attachments/assets/ac0247ca-b8ae-4c48-bc67-3422b6b04926" />

> Bindu (Sanskrit: बिंदु) is a Sanskrit word meaning "point", "drop" or "dot".

[Pāṇini](https://en.wikipedia.org/wiki/P%C4%81%E1%B9%87ini) [Aṣṭādhyāyī](https://en.wikipedia.org/wiki/A%E1%B9%A3%E1%B9%AD%C4%81dhy%C4%81y%C4%AB) set of sanscrit grammar rules.

## Install

```
npm i bindu -g
```

## Usage Example

```js
import {bindu} from 'bindu';
const {code} = bindu('प्रतिएक');
// 'प्रत्येक';

const {places} = bindu('प्रतिएक', {
    fix: false
});
places[0].message;
// vṛddhirādaic: ie -> ye
```

## Rules

- ✅ [`apply-vriddhi`](https://putout.cloudcmd.io/#/gist/59a1854deb359883a3a6e1eb60e82e21/23f7ee70713f9b32cce13774a9bef454bc0f2ce0`);

## License

MIT
