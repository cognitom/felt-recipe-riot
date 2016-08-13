# felt-recipe-riot

[![Build Status][travis-image]][travis-url]

This is A recipe for [Felt](https://github.com/cognitom/felt) with [Riot](http://riotjs.com/).

```bash
$ npm install felt-recipe-riot
```

## Usage via CLI

```bash
$ felt --recipe riot --src public
```

## Usage via Express

```javascript
'use strict'
const
  express = require('express'),
  felt = require('felt'),
  recipe = require('felt-recipe-riot')

const
  app = express(),
  flavor = { src: 'public' }

app.use(felt(recipe, flavor))
app.use(express.static('public'))
app.listen(3000)
```

[travis-image]:https://img.shields.io/travis/cognitom/felt-recipe-riot.svg?style=flat-square
[travis-url]:https://travis-ci.org/cognitom/felt-recipe-riot
