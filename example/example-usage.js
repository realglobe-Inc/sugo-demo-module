#!/usr/bin/env node

/**
 * Apply the interface into spot
 */
'use strict'

const sugoDemoInterface = require('sugo-demo-interface')

const sugoSpot = require('sugo-spot')
const co = require('co')

const CLOUD_URL = 'http://my-sugo-cloud.example.com/spots'

co(function * () {
  let spot = sugoSpot(CLOUD_URL, {
    key: 'my-spot-01',
    interfaces: {
      // Register the interface on spot
      myInterface01: sugoDemoInterface({})
    }
  })

// Connect to cloud server
  yield spot.connect()
}).catch((err) => console.error(err))
