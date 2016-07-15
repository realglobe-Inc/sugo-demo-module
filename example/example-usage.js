#!/usr/bin/env node

/**
 * Example usage of the terminal
 */
'use strict'

const sugoDemoModule = require('sugo-demo-module')
const sugoSpot = require('sugo-actors')
const co = require('co')

co(function * () {
  let actors = sugoSpot('http://my-sugo-cloud.example.com/actorss', {
    key: 'my-actors-01',
    interfaces: {
      // Register the interface
      module01: sugoDemoModule({})
    }
  })
  yield actors.connect()
}).catch((err) => console.error(err))
