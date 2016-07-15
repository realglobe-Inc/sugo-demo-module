/**
 * Demo of SUGO-Module
 * @module sugo-demo-module
 */

'use strict'

const sugoDemoModule = require('./sugo_demo_module')

let lib = sugoDemoModule.bind(this)

Object.assign(lib, sugoDemoModule, {
  sugoDemoModule
})

module.exports = lib
