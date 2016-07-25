/**
 * Create a module instance
 * @function create
 * @returns {DemoModule}
 */
'use strict'

const DemoModule = require('./demo_module')

/** @lends create */
function create (...args) {
  return new DemoModule(...args)
}

module.exports = create
