/**
 * Demo of SUGO-Module
 * @module sugo-demo-module
 * @version 4.0.2
 */

'use strict'

const create = require('./create')
const MyModule = require('./my_module')

let lib = create.bind(this)

Object.assign(lib, MyModule, {
  create,
  MyModule
})

module.exports = lib
