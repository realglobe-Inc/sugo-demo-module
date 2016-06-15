/**
 * Demo SUGO-Interface
 * @function sugoDemoInterface
 * @param {Object} config - Configuration
 * @returns {Object} - Interface settings
 */
'use strict'

const { name, version, description } = require('../package.json')
const co = require('co')
const debug = require('debug')('sugo:demo:interface')

/** @lends sugoDemoInterface */
function sugoDemoInterface (config = {}) {
  return {

    // ( Implement custom methods here )

    /**
     * Ping a message.
     * @param {SpotContext} ctx
     * @returns {Promise.<string>} - Pong message
     */
    ping (ctx) {
      let { params, pipe } = ctx
      return co(function * () {
        return params[ 0 ] || 'pong' // Return result to remote terminal.
      })
    },

    /**
     * Interface specification
     * @see https://github.com/realglobe-Inc/sg-schemas/blob/master/lib/interface_spec.json
     */
    $spec: {
      name,
      version,
      desc: description,
      methods: {

        // ( Describe methods here )

        ping: {
          desc: 'Test the reachability of a interface.',
          params: [
            { name: 'pong', type: 'string', desc: 'Pong message to return' }
          ],
          return: {
            type: 'string',
            desc: 'pong message'
          }
        }
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
