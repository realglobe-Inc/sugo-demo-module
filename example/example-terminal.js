#!/usr/bin/env node

/**
 * Example usage from terminal
 */
'use strict'

const co = require('co')
const assert = require('assert')
const sugoTerminal = require('sugo-terminal')

const CLOUD_URL = 'http://my-sugo-cloud.example.com/terminals'
const TARGET_SPOT_ID = 'my-spot-01'

co(function * () {
  let terminal = sugoTerminal(CLOUD_URL, {})

  // Connect to the spot
  let spot = terminal.connect(TARGET_SPOT_ID)

  // Get the interface
  let myInterface01 = spot.myInterface01()

  // Send ping
  let pong = yield myInterface01.ping()
  assert.ok(pong)

}).catch((err) => console.error(err))

