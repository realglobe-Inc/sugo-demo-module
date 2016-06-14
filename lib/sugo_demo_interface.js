/**
 * @function sugoDemoInterface
 * @param {Object} config - Configuration
 * @returns {Object} - Interface settings
 */
'use strict'

const { name, version } = require('../package.json')
const co = require('co')
const debug = require('debug')('sugo:demo:interface')

/** @lends sugoDemoInterface */
function sugoDemoInterface (config = {}) {
  return {

    /**
     * Ping a message.
     * @param {SpotContext} ctx
     * @returns {Promise}
     */
    ping (ctx) {
      let { params, pipe } = ctx
      debug('Invoke ping with params: ', params)
      return co(function * () {
        return 'pong!' // Return result to remote terminal.
      })
    },

    /**
     * Interface specification
     * @see https://github.com/realglobe-Inc/sg-schemas/blob/master/lib/interface_spec.json
     */
    $spec: {
      name,
      version,
      desc: '__your_interface_description__',
      methods: {

        // ( Describe methods here )

      }
    }
  }
}

module.exports = sugoDemoInterface

/**
 * @typedef {Object} SpotContext
 * @property {Array} params - Invoke parameters.
 * @property {EventEmitter} pipe - Pipe to remote terminal.
 */
