# felt-recipe-minimal

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
  recipe = require('felt-recipe-minimal')

const
  app = express(),
  flavor = { src: 'public' }

app.use(felt(recipe, flavor))
app.use(express.static('public'))
app.listen(3000)
```
