'use strict'
const
  assert = require('assert'),
  co = require('co'),
  Nightmare = require('nightmare'),
  request = require('request-promise'),
  fsp = require('fs-promise'),
  path = require('path'),
  felt = require('felt/lib/server'),
  configBuilder = require('felt/lib/config-builder'),
  recipe = require('../felt.config.js')

describe('felt-recipe-riot', () => {
  let server
  const port = 3333, root = __dirname

  before(co.wrap(function* () {
    const opts = configBuilder(recipe, { src: 'fixture', port, root })
    server = yield felt(opts)
  }))

  it('bundles scripts', co.wrap(function* () {
    const
      url = `http://localhost:${ port }/index.html`,
      text = yield Nightmare()
        .goto(url)
        .wait()
        .evaluate(() => document.querySelector('md').innerHTML)
        .end()

    assert.equal(text, '<p>Hello <strong>Rollup</strong>!</p>\n')
  }))

  after(() => {
    server.close()
  })
})
