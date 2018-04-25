did-universal-resolver-resolution
=================================

Decentralized Identity (DID) Universal Resolver resolution helpers

## Abstract

In this module we provide a set of classes useful for [Decentralized
Identity (DID)](https://w3c-ccg.github.io/did-spec/) universal
resolution. The classes here are intended to be used with the rest of
the `did-universal-resolver-*` modules.

## Installation

```sh
$ npm install did-universal-resolver-resolution
```

## Usage Example

```js
const { Driver } = require('did-universal-resolver-driver')
const driver = new Driver({resolve, properties})

function resolve(id) {
}

function properties() {
  return new Map()
}
```

## API

### `resolution = new ResolutionResult(opts)`

### `error = new ResolutionError(message)`

## See Also

* [Decentralized Identity Spec](https://github.com/w3c-ccg/did-spec)
* [Universal Resolver](https://github.com/decentralized-identity/universal-resolver)
* [did-universal-resolver-driver](https://github.com/littlstar/did-universal-resolver-driver)

## License

MIT
