'use strict'

class ResolutionError extends Error {
  constructor(message) {
    super(message)
    this.code = 501
    this.status = 501
  }
}

module.exports = {
  ResolutionError
}
