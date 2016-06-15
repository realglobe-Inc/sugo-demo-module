/**
 * Test case for sugoDemoInterface.
 * Runs with mocha.
 */
'use strict'

const sugoDemoInterface = require('../lib/sugo_demo_interface.js')
const assert = require('assert')
const sgSchemas = require('sg-schemas')
const sgValidator = require('sg-validator')
const co = require('co')

describe('sugo-demo-interface', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Get interface spec.', () => co(function * () {
    let interface_ = sugoDemoInterface({})
    assert.ok(interface_)

    let { $spec } = interface_
    let specError = sgValidator(sgSchemas.interfaceSpec).validate($spec)
    assert.ok(!specError)
  }))

  it('Take ping-pong', () => co(function * () {
    let interface_ = sugoDemoInterface({})
    let pong = yield interface_.ping({ params: [] })
    assert.ok(pong)
  }))
})

/* global describe, before, after, it */
