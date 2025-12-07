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

bindu('प्रतिएक');
// returns {code: 'प्रत्येक';A'}

const {places} = bindu('प्रतिएक', {
    fix: false,
});

places[0].message;
// vṛddhirādaic: ie -> ye
```

## Rules

- ✅[`sandhi/apply-dirgha`](https://putout.cloudcmd.io/#/gist/0ad8154614be489ae50931109618100a/5ce86f7344b37fd40afeb229e6cb1f668d4f92fd);
- ✅[`sandhi/apply-yan`](https://putout.cloudcmd.io/#/gist/3091528d3d3eb095032fbec200599df0/c4dcefa2d29fd85f9d3d768b6eaf6934fd5a3fbb);

## License

MIT
