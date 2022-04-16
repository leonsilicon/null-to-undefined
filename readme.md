# null-to-undefined

[![npm version](https://badge.fury.io/js/null-to-undefined.svg)](https://badge.fury.io/js/null-to-undefined)

Recursively converts `null` values in an array/object to `undefined`.

## Installation

```
npm install null-to-undefined
```

## Usage

```typescript
import nullToUndefined from 'null-to-undefined';

console.log(nullToUndefined([null, 2, { foo: 'string', bar: null }])); // [undefined, 2, { foo: 'string', bar: undefined }]
```
