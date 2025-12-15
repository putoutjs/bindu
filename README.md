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
// returns {code: 'प्रत्येक'}
bindu('द्रौपदी अश्वम्', {
    type: 'iast',
});

// returns {code: 'draupadyaśvam'}
const {places} = bindu('प्रतिएक', {
    fix: false,
});

places[0].message;
// vṛddhirādaic: ie -> ye
```

## Rules

### Sandhi

- ✅[`sandhi/apply-dirgha`](https://putout.cloudcmd.io/#/gist/0ad8154614be489ae50931109618100a/5ce86f7344b37fd40afeb229e6cb1f668d4f92fd): [अकः सवर्णे दीर्घः](https://www.learnsanskrit.org/vyakarana/sounds/ac-sandhi/#:~:text=a%20new%20rule%3A-,%E0%A4%85%E0%A4%95%E0%A4%83%20%E0%A4%B8%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%A3%E0%A5%87%20%E0%A4%A6%E0%A5%80%E0%A4%B0%E0%A5%8D%E0%A4%98%E0%A4%83%E0%A5%A4%20%E0%A5%AC.%E0%A5%A7.%E0%A5%A7%E0%A5%A6%E0%A5%A7,-aka%E1%B8%A5%20savar%E1%B9%87e%20d%C4%ABrgha%E1%B8%A5);
- ✅[`sandhi/apply-yan`](https://putout.cloudcmd.io/#/gist/3091528d3d3eb095032fbec200599df0/c4dcefa2d29fd85f9d3d768b6eaf6934fd5a3fbb): [इको यणचि](https://www.learnsanskrit.org/vyakarana/sounds/vidhi-rules);
- ✅[`sandhi/apply-guna`](https://putout.cloudcmd.io/#/gist/c057229cbbedf356c1d317022141f8ca/dea60bda78c84f12aef77a9e08bc17274d66c65e): [आद्गुणः](https://www.learnsanskrit.org/panini/vowel/#:~:text=in%20ayav%C4%81y%C4%81v.-,6.1.87,-%E0%A4%86%E0%A4%A6%E0%A5%8D%E0%A4%97%E0%A5%81%E0%A4%A3%E0%A4%83);
- ✅[`sandhi/apply-vriddhi`](https://putout.cloudcmd.io/#/gist/7cdc2383c74d7afeb8cfd93df7b5f868/79b1c979be725fc082cf81991b16fac527cfcd7b): [वृद्धिरेचि](https://www.learnsanskrit.org/panini/vowel/#:~:text=and%20%C4%81.-,6.1.88,-%E0%A4%B5%E0%A5%83%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A4%BF%E0%A4%B0%E0%A5%87%E0%A4%9A%E0%A4%BF);
- ✅[`sandhi/apply-purvarupa`](https://putout.cloudcmd.io/#/gist/23e2b612a185529ea6823e5f81d35b7d/2ace30ac469be03af1c41911b78d85e85b9a1120): [एकः पूर्वपरयोः](https://www.learnsanskrit.org/panini/vowel/#:~:text=this%20rule%20mean%3F-,%E0%A4%8F%E0%A4%95%E0%A4%83%20%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%B5%E0%A4%AA%E0%A4%B0%E0%A4%AF%E0%A5%8B%E0%A4%83,-eka%E1%B8%A5%20p%C5%ABrvaparayo%E1%B8%A5)
- ✅[`sandhi/apply-ayadaya`](https://putout.cloudcmd.io/#/gist/39db56c40174f61caed795c2a2dc89a7/dc956c6b0834167d9814ba70036674f4a10f56f9): [आयादयः](https://www.learnsanskrit.org/references/sandhi/vowel/#:~:text=madhu%20iva%20%E2%86%92%20madhviva-,Now,-%2C%20some%20examples%20for)
- ✅[`sandhi/apply-padantad`](https://putout.cloudcmd.io/#/gist/f73f49bf102a6f2ab34a100ee29f81cc/6b1c3f1595841a08a035437924165e4b8d27896d): [एङः पदान्तादति](https://www.gingersunrise.com/i/133147357/एङ-पदनतदत);

#### apply-padantad

```
ए + अ → एऽ
e + a → e'

ओ + अ → ओऽ
o + a → o'

ऐ + अ → ऐऽ
ai + a → ai'

औ + अ → औऽ
au + a → au'
```

#### apply-ayadaya

```
भोअति → भवति
bhoati → bhavati
```

#### apply-dirgha

```
अ + अ → आ
a + a → ā

इ + इ → ई
i + i → ī

उ + उ → ऊ
u + u → ū

ऋ + ऋ → ॠ
ṛ + ṛ → ṝ
```

#### apply-purvarupa

```
ए + अ → ए
e + a → e

ओ + अ → ओ 
o + a → o
```

Example:

```
अन्ते + अपि → अन्तेऽपि
```

## License

MIT
