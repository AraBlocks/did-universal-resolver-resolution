'use strict'

/**
 * `ResolutionResult` symbols
 */
const $resolverMetadata = Symbol('resolverMetadata')
const $driverMetadata = Symbol('driverMetadata')
const $didReference = Symbol('didReference')
const $didDocument = Symbol('didDocument')

class ResolutionResult {

  static fromJSON(json) {
    return new ResolutionResult(json)
  }

  constructor(opts) {
    if (!opts || 'object' != typeof opts) {
      opts = {}
    }

    this[$resolverMetadata] = opts.resolverMetadata || null
    this[$driverMetadata] = null
    this[$didReference] = null
    this[$didDocument] = null

    if ('function' == typeof Object.seal) {
      Object.seal(this)
    }
  }

  get resolverMetadata() { return this[$resolverMetadata] }
  get driverMetadata() { return this[$driverMetadata] }
  get didReference() { return this[$didReference] }
  get didDocument() { return this[$didDocument] }

  set resolverMetadata(resolverMetadata) {
    this[$resolverMetadata] = resolverMetadata
  }

  set driverMetadata(driverMetadata) {
    this[$driverMetadata] = driverMetadata
  }

  set didReference(didReference) {
    this[$didReference] = didReference
  }

  set didDocument(didDocument) {
    this[$didDocument] = didDocument
  }

  toJSON() {
    return {
      resolverMetadata: this[$resolverMetadata],
      driverMetadata: this[$driverMetadata],
      didReference: this[$didReference],
      didDocument: this[$didDocument],
    }
  }
}

module.exports = {
  ResolutionResult,
}
