import assert from 'node:assert'

function summ(a, b) {
  return a + b
}

const summResult = summ(1, 1)
assert.equal(summResult, 2)

function isNumber(a) {
  if (typeof a === 'number') {
    return true
  }

  return false
}

const isNumberResultSuccess = isNumber(5)
assert.ok(isNumberResultSuccess)

const isNumberResultFailure = isNumber('abc')
assert.ok(!isNumberResultFailure)