/**
 * Demo of SUGO-Module
 * @module sugo-demo-module
 * @version 4.0.0
 */

'use strict'

const create = require('./create')
const DemoModule = require('./demo_module')

let lib = create.bind(this)

Object.assign(lib, DemoModule, {
  create,
  DemoModule
})

module.exports = lib
