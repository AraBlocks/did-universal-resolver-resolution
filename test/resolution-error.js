'use strict'

const { ResolutionError } = require('../')
const { test } = require('ava')

test("ResolutionError", (t) => {
  t.plan(3)

  const err = new ResolutionError('test')

  t.true(err.code === 501)
  t.true(err.status === 501)
  t.true(err.message === 'test')
})
