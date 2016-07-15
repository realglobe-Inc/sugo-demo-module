/**
 * Demo SUGO-Module
 * @function sugoDemoModule
 * @param {Object} config - Configuration
 * @returns {Object} - Interface settings
 */
'use strict'

const { name, version, description } = require('../package.json')
const co = require('co')
const { hasBin } = require('sg-check')
const debug = require('debug')('sugo:demo:module')

/** @lends sugoDemoModule */
function sugoDemoModule (config = {}) {
  debug('Config: ', config)

  return {

    /**
     * Ping a message.
     * @param {string} pong
     * @returns {Promise.<string>} - Pong message
     */
    ping (pong = 'pong') {
      return co(function * pingAck () {
        return pong // Return result to a remote caller.
      })
    },

    /**
     * Assert spot system requirements.
     * @throws {Error} - System requirements failed error
     * @returns {Promise.<boolean>} - Asserted state
     */
    assert () {
      const bins = [ 'node' ] // Required commands
      return co(function * assertAck () {
        for (let bin of bins) {
          let ok = yield hasBin(bin)
          if (!ok) {
            throw new Error(`[${name}] Command not found: ${bin}`)
          }
        }
        return true
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
        ping: {
          desc: 'Test the reachability of an interface.',
          params: [
            { name: 'pong', type: 'string', desc: 'Pong message to return' }
          ],
          return: {
            type: 'string',
            desc: 'Pong message'
          }
        },

        assert: {
          desc: 'Test if the spot fulfills system requirements',
          params: [],
          throws: [ {
            type: 'Error',
            desc: 'System requirements failed'
          } ],
          return: {
            type: 'boolean',
            desc: 'System is OK'
          }
        }
      },

      events: null
    }
  }
}

module.exports = sugoDemoModule