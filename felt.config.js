'use strict'

/**
 * A recipe for Felt with Riot
 */

const
  rollup = require('felt-rollup'),
  riot = require('rollup-plugin-riot'),
  buble = require('rollup-plugin-buble'),
  resolve = require('rollup-plugin-node-resolve'),
  commonjs = require('rollup-plugin-commonjs'),
  postcss = require('felt-postcss'),
  postcssImport = require('postcss-import'),
  cssnext = require('postcss-cssnext')

module.exports = {
  // default handlers for each extension
  handlers: {
    '.js': rollup({
      plugins: [
        riot(),
        resolve({ jsnext: true,  main: true, browser: true }),
        commonjs(),
        buble()
      ],
      // At this point riot has no support for sourcemap.
      // We'd like to change this to `true` later.
      sourceMap: false
    }),
    '.css': postcss({
      plugins: [
        postcssImport(),
        cssnext()
      ],
      options: {
        map: { inline: false }
      }
    })
  }
}
