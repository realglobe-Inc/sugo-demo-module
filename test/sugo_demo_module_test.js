/**
 * Test case for sugoDemoModule.
 * Runs with mocha.
 */
'use strict'

const sugoDemoModule = require('../lib/sugo_demo_module.js')
const assert = require('assert')
const sgSchemas = require('sg-schemas')
const sgValidator = require('sg-validator')
const co = require('co')

describe('sugo-demo-module', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Get interface spec', () => co(function * () {
    let module = sugoDemoModule({})
    assert.ok(module)

    let { $spec } = module
    let specError = sgValidator(sgSchemas.moduleSpec).validate($spec)
    assert.ok(!specError)
  }))

  it('Try ping-pong', () => co(function * () {
    let module = sugoDemoModule({})
    let pong = yield module.ping({ params: [ 'pong' ] })
    assert.equal(pong, 'pong')
  }))

  it('Do assert', () => co(function * () {
    let module = sugoDemoModule({})
    let caught
    try {
      yield module.assert({})
    } catch (err) {
      caught = err
    }
    assert.ok(!caught)
  }))

  it('Compare methods with spec', () => co(function * () {
    let module = sugoDemoModule({})
    let { $spec } = module
    let implemented = Object.keys(module).filter((name) => !/^[\$_]/.test(name))
    let described = Object.keys($spec.methods).filter((name) => !/^[\$_]/.test(name))
    for (let name of implemented) {
      assert.ok(!!~described.indexOf(name), `${name} method should be described in spec`)
    }
    for (let name of described) {
      assert.ok(!!~implemented.indexOf(name), `${name} method should be implemented`)
    }
  }))
})

/* global describe, before, after, it */
