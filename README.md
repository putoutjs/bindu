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

## Input

The input script is detected automatically: any Devanāgarī character means
Devanāgarī, any IAST diacritic (`ā`, `ṣ`, `ḥ`, combining marks too) means IAST,
anything else is SLP1. Override it with the `from` option (`'devanagari'`,
`'iast'`, `'slp1'`). The `type` option sets the script of the output, the same
three values, Devanāgarī by default. A space stays a pada boundary.

Plain ASCII IAST without diacritics (`rama eza`) reads as SLP1, so pass
`from: 'iast'` if you need it read otherwise.

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
bindu('rāma eṣa', {
    from: 'iast',
    type: 'iast',
});
// returns {code: 'rāmaiṣa'}
```

## Rules

### Sandhi

#### ac

- ✅[`ac/apply-dirgha`](https://putout.cloudcmd.io/#/gist/0ad8154614be489ae50931109618100a/5ce86f7344b37fd40afeb229e6cb1f668d4f92fd): [अकः सवर्णे दीर्घः](https://www.learnsanskrit.org/vyakarana/sounds/ac-sandhi/#:~:text=a%20new%20rule%3A-,%E0%A4%85%E0%A4%95%E0%A4%83%20%E0%A4%B8%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%A3%E0%A5%87%20%E0%A4%A6%E0%A5%80%E0%A4%B0%E0%A5%8D%E0%A4%98%E0%A4%83%E0%A5%A4%20%E0%A5%AC.%E0%A5%A7.%E0%A5%A7%E0%A5%A6%E0%A5%A7,-aka%E1%B8%A5%20savar%E1%B9%87e%20d%C4%ABrgha%E1%B8%A5) — 6.1.101
- ✅[`ac/apply-yan`](https://putout.cloudcmd.io/#/gist/3091528d3d3eb095032fbec200599df0/c4dcefa2d29fd85f9d3d768b6eaf6934fd5a3fbb): [इको यणचि](https://www.learnsanskrit.org/vyakarana/sounds/vidhi-rules) — 6.1.77
- ✅[`ac/apply-guna`](https://putout.cloudcmd.io/#/gist/c057229cbbedf356c1d317022141f8ca/dea60bda78c84f12aef77a9e08bc17274d66c65e): [आद्गुणः](https://www.learnsanskrit.org/panini/vowel/#:~:text=in%20ayav%C4%81y%C4%81v.-,6.1.87,-%E0%A4%86%E0%A4%A6%E0%A5%8D%E0%A4%97%E0%A5%81%E0%A4%A3%E0%A4%83) — 6.1.87
- ✅[`ac/apply-vriddhi`](https://putout.cloudcmd.io/#/gist/7cdc2383c74d7afeb8cfd93df7b5f868/79b1c979be725fc082cf81991b16fac527cfcd7b): [वृद्धिरेचि](https://www.learnsanskrit.org/panini/vowel/#:~:text=and%20%C4%81.-,6.1.88,-%E0%A4%B5%E0%A5%83%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A4%BF%E0%A4%B0%E0%A5%87%E0%A4%9A%E0%A4%BF) — 6.1.88
- ✅[`ac/apply-purvarupa`](https://putout.cloudcmd.io/#/gist/23e2b612a185529ea6823e5f81d35b7d/2ace30ac469be03af1c41911b78d85e85b9a1120): [एकः पूर्वपरयोः](https://www.learnsanskrit.org/panini/vowel/#:~:text=this%20rule%20mean%3F-,%E0%A4%8F%E0%A4%95%E0%A4%83%20%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%B5%E0%A4%AA%E0%A4%B0%E0%A4%AF%E0%A5%8B%E0%A4%83,-eka%E1%B8%A5%20p%C5%ABrvaparayo%E1%B8%A5) — 6.1.84
- ✅[`ac/apply-padantad`](https://putout.cloudcmd.io/#/gist/f73f49bf102a6f2ab34a100ee29f81cc/6b1c3f1595841a08a035437924165e4b8d27896d): [एङः पदान्तादति](https://www.gingersunrise.com/i/133147357/एङ-पदनतदत) — 6.1.109
- ✅[`ac/apply-eco-yavayava`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/ac/apply-eco-yavayava/index.js): [एचोऽयवायावः](https://ashtadhyayi.com/sutraani/6/1/78) — 6.1.78
- ✅[`pragrhya`](https://github.com/putoutjs/bindu/blob/master/lib/pragrhya/index.js): [प्लुतप्रगृह्या अचि नित्यम्](https://ashtadhyayi.com/sutraani/6/1/125) — 6.1.125

#### visarga

- ✅[`visarga/apply-rori`](https://putout.cloudcmd.io/#/gist/839c4d49726a2f869dc2854a110001d9/f443ecb1522b2b0f8d18a86eaaf8bdfe9325eaf6): [रो रि।](https://www.learnsanskrit.org/vyakarana/sounds/hal-sandhi/#:~:text=rule%208.3.15%20below%3A-,%E0%A4%B0%E0%A5%8B%20%E0%A4%B0%E0%A4%BF%E0%A5%A4%20%E0%A5%AE.%E0%A5%A9.%E0%A5%A7%E0%A5%AA,-ro%20ri%20) — 8.3.14
- ✅[`visarga/apply-rori-dirgha`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/visarga/apply-rori-dirgha/index.js): [ढ्रलोपे पूर्वस्य दीर्घोऽणः](https://ashtadhyayi.com/sutraani/6/3/111) — 6.3.111
- ✅[`visarga/apply-visarga-sha`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/visarga/apply-visarga-sha/index.js): [इदुदुपधस्य चाप्रत्ययस्य](https://ashtadhyayi.com/sutraani/8/3/41) — 8.3.41
- ✅[`visarga/apply-bhobhago`](https://putout.cloudcmd.io/#/gist/839c4d49726a2f869dc2854a110001d9/f443ecb1522b2b0f8d18a86eaaf8bdfe9325eaf6): [भोभगोअघोअपूर्वस्य योऽशि](https://ashtadhyayi.com/sutraani/8/3/17) — 8.3.17
- ✅[`visarga/apply-kharovasana`](https://putout.cloudcmd.io/#/gist/425cfcba3ba6dd2bb4a6692fc6fb6959/bc3fb244c2bbe03597e3ae2ab85473ae46a5f22b):[खरवसानयोर्विसर्जनीयः](https://ashtadhyayi.com/sutraani/8/3/15) — 8.3.15
- ✅[`visarga/apply-visarga-voiced`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/visarga/apply-visarga-voiced/index.js): [अतो रोरप्लुतादप्लुते](https://ashtadhyayi.com/sutraani/6/1/113) — 6.1.113
- ✅[`visarga/apply-visarga-vowel`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/visarga/apply-visarga-vowel/index.js): [हशि च](https://ashtadhyayi.com/sutraani/6/1/114) — 6.1.114
- ✅[`visarga/apply-ah-sandhi`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/visarga/apply-ah-sandhi/index.js): [लोपः शाकल्यस्य](https://ashtadhyayi.com/sutraani/8/3/19) — 8.3.19
- ✅[`visarga/apply-as-sandhi`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/visarga/apply-as-sandhi/index.js): [अतो रोरप्लुतादप्लुते](https://ashtadhyayi.com/sutraani/6/1/113) — 6.1.113
- ✅[`visarga/apply-sassa`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/visarga/apply-sassa/index.js): [विसर्जनीयस्य सः](https://ashtadhyayi.com/sutraani/8/3/34) — 8.3.34 (optional sibilant form: 8.3.36)

#### hal

- ✅[`hal/apply-anusvara`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/hal/apply-anusvara/index.js): [अनुस्वारस्य ययि परसवर्णः](https://ashtadhyayi.com/sutraani/8/4/58) — 8.4.58
- ✅[`hal/apply-jashtva`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/hal/apply-jashtva/index.js): [झलां जशोऽन्ते](https://ashtadhyayi.com/sutraani/8/2/39) — 8.2.39
- ✅[`hal/apply-shchutva`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/hal/apply-shchutva/index.js): [स्तोः श्चुना श्चुः](https://ashtadhyayi.com/sutraani/8/4/40) — 8.4.40
- ✅[`hal/apply-shtutva`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/hal/apply-shtutva/index.js): [ष्टुना ष्टुः](https://ashtadhyayi.com/sutraani/8/4/41) — 8.4.41
- ✅[`hal/apply-yaro-anunasike`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/hal/apply-yaro-anunasike/index.js): [यरोऽनुनासिकेऽनुनासिको वा](https://ashtadhyayi.com/sutraani/8/4/45) — 8.4.45 (optional, nasal form is the default)
- ✅[`hal/apply-udah-sthastambhoh`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/hal/apply-udah-sthastambhoh/index.js): [उदः स्थास्तम्भोः पूर्वस्य](https://ashtadhyayi.com/sutraani/8/4/61) — 8.4.61
- ✅[`hal/apply-nash-chavy-aprashan`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/hal/apply-nash-chavy-aprashan/index.js): [नश्छव्यप्रशान्](https://ashtadhyayi.com/sutraani/8/3/7) — 8.3.7
- ✅[`hal/apply-samparibhyam-karotau`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/hal/apply-samparibhyam-karotau/index.js): [सम्परिभ्यां करोतौ भूषणे](https://ashtadhyayi.com/sutraani/6/1/137) — 6.1.137
- ✅[`hal/apply-upasargat-satvam`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/hal/apply-upasargat-satvam/index.js): [उपसर्गात् सुनोतिसुवतिस्यतिस्तौतिस्तोभतिस्थासेनयसेधसिचसञ्जस्वञ्जाम्](https://ashtadhyayi.com/sutraani/8/3/65) — 8.3.65
- ✅[`hal/apply-shash-cho-ati`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/hal/apply-shash-cho-ati/index.js): [शश्छोऽटि](https://ashtadhyayi.com/sutraani/8/4/63) — 8.4.63 (optional, the aspirated form is the default)
- ✅[`hal/apply-cch`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/hal/apply-cch/index.js): [छे च](https://ashtadhyayi.com/sutraani/6/1/73) — 6.1.73
- ✅[`hal/apply-topadhasha`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/hal/apply-topadhasha/index.js): [तोर्लि](https://ashtadhyayi.com/sutraani/8/4/60) — 8.4.60
- ✅[`hal/apply-natva`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/hal/apply-natva/index.js): [रषाभ्यां नो णः समानपदे](https://ashtadhyayi.com/sutraani/8/4/1) — 8.4.1
- ✅[`hal/apply-charva`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/hal/apply-charva/index.js): [खरि च](https://ashtadhyayi.com/sutraani/8/4/55) — 8.4.55
- ✅[`hal/apply-satvam`](https://github.com/putoutjs/bindu/blob/master/lib/sandhi/hal/apply-satvam/index.js): [आदेशप्रत्यययोः](https://ashtadhyayi.com/sutraani/8/3/59) — 8.3.59

#### apply-anusvara

```
सम् + गच्छति → संगच्छति
saM + gacCati → saNgacCati
saṃ + gacchati → saṅgacchati

सम् + योग → संयोग
saM + yoga → saYyoga
saṃ + yoga → sañyoga
```

#### apply-jashtva

```
वाक् + देव → वाग्देव
vAk + deva → vAgdeva
vāk + deva → vāgdeva

तत् + अपि → तदपि
tat + api → tadapi
tata + api → tadapi
```

#### apply-padantad

```
ए + अ → एऽ
e + a → e'

ओ + अ → ओऽ
o + a → o'
```

#### apply-as-sandhi

```
ramas + asti → ramo'sti
rAmas + asti → rAmo'sti
rAmas + ca → rAmaS ca
```

#### apply-ah-sandhi

```
ramāḥ + asti → ramā asti
rAmAH + asti → rAmA asti
ramāḥ + deva → ramā deva
rAmAH + deva → rAmA deva
```

#### apply-rori-dirgha

```
punar + ramate → punA ramate
```

#### apply-visarga-sha

```
nis + kfta → nizkfta
agniH + karoti → agniH karoti
```

#### apply-yaro-anunasike

```
tat + mama → tanmama
jagat + nAtha → jagannAtha
```

#### apply-udah-sthastambhoh

```
ut + sTAna → utTAna
```

#### apply-nash-chavy-aprashan

```
mahAn + ca → mahAMS ca
```

#### apply-samparibhyam-karotau

```
sam + kfta → saMskfta
pari + kfta → parizkfta
```

#### apply-upasargat-satvam

```
aBi + sTA → aBizTA
prati + stu → pratizwu
```

#### apply-shash-cho-ati

```
tat + Siva → tacCiva
```

#### apply-satvam

```
nis + kRta → nizkRta
```

#### apply-topadhasha

```
तत् + लभते → तल्लभते
tat + labhate → tallabhate

तद् + लभते → तल्लभते
tad + labhate → tallabhate
```

#### apply-natva

`n` becomes retroflex `ṇ` (SLP1 `R`) after `r`, `ṣ` or `ś` in the same pada.

```
पितर् + नः → पितर्णः
pitar + naH → pitarRaH
pitar + naḥ → pitarṇaḥ

पुर् + नः → पुर्णः
pur + naH → purRaH
pur + naḥ → purṇaḥ
```

#### apply-charva

A voiced final consonant becomes voiceless before a voiceless (khar) consonant.
Opposite of apply-jashtva.

```
वाग् + च → वाक्च
vAg + ca → vAkca
vāg + ca → vākca

वाग् + ते → वाक्ते
vAg + te → vAkte
vāg + te → vākte
```

#### apply-pragrhya

Pragrhya words are exempt from sandhi: their final vowel stays separate.

```
कवी + अपि → कवी अपि
kavI + api → kavI api

साधु + अपि → साधु अपि
sADU + api → sADU api
```

#### apply-guna

```
भूत्वा + इह → भूत्वेह
bhUtvA + iha → bhUtveha
bhūtvā + iha → bhūtveha

देव + ऋषि → देवर्षि
deva + fzi → devarzi
deva + ṛṣi → devarṣi
```

#### apply-eco-yavayava

##### ए

```
ए + इ  → अयि
e + i  → ayi

ए + उ  → अयु
e + u  → ayu

ए + ए  → अये
e + e  → aye

ए + ओ  → अयो
e + o  → ayo
```

##### ओ

```
ओ + इ  → अवि
o + i  → avi

ओ + उ  → अवु
o + u  → avu
```

##### ऐ

```
ऐ + अ  → आय
ai + a  → āya

ऐ + इ  → आयि
ai + i  → āyi
```

##### औ

```
औ + अ  → आव
au + a  → āva

औ + इ  → आवि
au + i  → āvi
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
