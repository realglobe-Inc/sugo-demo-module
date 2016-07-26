#!/usr/bin/env node

/**
 * Example usage of the caller
 * @see https://github.com/realglobe-Inc/sugo-caller
 */
'use strict'

const { MyModule } = require('sugo-demo-module')
const sugoActor = require('sugo-actor')
const co = require('co')

co(function * () {
  let actor = sugoActor('http://my-sugo-cloud.example.com/actors', {
    key: 'my-actor-01',
    modules: {
      // Register the module
      module01: new MyModule({})
    }
  })
  yield actor.connect()
}).catch((err) => console.error(err))
