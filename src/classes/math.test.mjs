import { sum, multiply, devide } from './math.mjs'

describe('sum', () => {
  test('1 + 1 equal 2', () => {
    const result = sum(1, 1)
    expect(result).toBe(2)
  })
  test('2 + -1 equal 1', () => {
    const result = sum(2, -1)
    expect(result).toBe(1)
  })
})

describe('multiply', () => {
  test('3 * 2 equal 6', () => {
    const result = multiply(3, 2)
    expect(result).toBe(6)
  })
})

describe('devide', () => {
  test('8 / 4 equal 2', () => {
    const result = devide(8, 4)
    expect(result).toBe(2)
  })

  test('21 / 7 equal 3', () => {
    const result = devide(21, 7)
    expect(result).toBe(3)
  })
})
