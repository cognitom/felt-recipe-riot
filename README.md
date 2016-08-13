# felt-recipe-minimal

[![Build Status][travis-image]][travis-url]

This is a minimal recipe for [Felt](https://github.com/cognitom/felt).

```bash
$ npm install felt-recipe-minimal
```

## Usage via CLI

```bash
$ felt --recipe minimal --src public
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
