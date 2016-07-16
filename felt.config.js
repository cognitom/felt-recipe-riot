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
  autoprefixer = require('autoprefixer')

module.exports = {
  // default handlers for each extension
  handlers: {
    '.js': rollup({
      plugins: [
        riot(),
        resolve({ jsnext: true,  main: true, browser: true }),
        commonjs(),
        buble()
      ]
    }),
    '.css': postcss({
      plugins: [
        postcssImport(),
        autoprefixer()
      ],
      options: {
        map: { inline: false }
      }
    })
  }
}
