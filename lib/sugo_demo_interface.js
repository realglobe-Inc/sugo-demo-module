/**
 * @function sugoDemoInterface
 * @param {Object} config - Configuration
 * @returns {Object} - Interface settings
 */
'use strict'

const { name, version } = require('../package.json')
const co = require('co')

/** @lends sugoDemoInterface */
function sugoDemoInterface (config = {}) {
  return {

    // ( Define methods here )

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
