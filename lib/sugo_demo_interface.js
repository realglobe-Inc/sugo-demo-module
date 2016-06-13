/**
 * @function sugoDemoInterface
 * @param {Object} config - Configuration
 * @returns {Object} - Interface settings
 */
'use strict'

const co = require('co')

/** @lends sugoDemoInterface */
function sugoDemoInterface (config = {}) {
  return {
    
    // ( Define methods here )

    /**
     * Interface specification
     */
    $spec: {
      $desc: '__your_interface_description__',
      $methods: {

        // ( Describe methods here )

      }
    }
  }
}

module.exports = sugoDemoInterface
