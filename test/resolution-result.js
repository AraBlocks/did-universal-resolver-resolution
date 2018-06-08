'use strict'

const { ResolutionResult } = require('../')
const { test } = require('ava')

test("ResolutionResult: Constructor: No opts", (t) => {
  const result = new ResolutionResult()

  t.is(result.resolverMetadata, null)
  t.is(result.driverMetadata, null)
  t.is(result.didReference, null)
  t.is(result.didDocument, null)
})

test("ResolutionResult: Sealed", (t) => {
  t.plan(1)

  const result = new ResolutionResult()

  t.throws(() => { result.isSealed = false })
})

test("ResolutionResult: FromJSON", (t) => {
  t.plan(4)

  const result = ResolutionResult.fromJSON({
    resolverMetadata: {},
    driverMetadata: {},
    didReference: {},
    didDocument: {}
  })

  t.is(result.resolverMetadata, {})
  t.is(result.driverMetadata, {})
  t.is(result.didReference, {})
  t.is(result.didDocument, {})
})

test("ResolutionResult: toJSON", (t) => {
  t.plan(4)

  const result = ResolutionResult.fromJSON({
    resolverMetadata: {},
    driverMetadata: {},
    didReference: {},
    didDocument: {}
  })

  const toJSON = result.toJSON()

  t.is(toJSON.resolverMetadata, {})
  t.is(toJSON.driverMetadata, {})
  t.is(toJSON.didReference, {})
  t.is(toJSON.didDocument, {})
})

test("ResolutionResult: set(resolverMetadata)", (t) => {
  t.plan(1)

  const result = new ResolutionResult()

  result.resolverMetadata = 1

  t.is(result.resolverMetadata, 1)
})

test("ResolutionResult: set(driverMetadata)", (t) => {
  t.plan(1)

  const result = new ResolutionResult()

  result.driverMetadata = 1

  t.is(result.driverMetadata, 1)
})

test("ResolutionResult: set(didReference)", (t) => {
  t.plan(1)

  const result = new ResolutionResult()

  result.didReference = 1

  t.is(result.didReference, 1)
})

test("ResolutionResult: set(didDocument)", (t) => {
  t.plan(1)

  const result = new ResolutionResult()

  result.didDocument = 1

  t.is(result.didDocument, 1)
})
