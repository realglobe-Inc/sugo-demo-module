/**
 * Demo SUGO-Interface
 * @module sugo-demo-interface
 */

'use strict'

const sugoDemoInterface = require('./sugo_demo_interface')

let lib = sugoDemoInterface.bind(this)

Object.assign(lib, sugoDemoInterface, {
  sugoDemoInterface
})

module.exports = lib
