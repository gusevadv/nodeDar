describe('Базовые операторы, математика', () => {
  test('Постфиксная и префиксная формы', () => {
    let a = 1, b = 1;

    let c = ++a; // ?
    expect(c).toBe(2)
    let d = b++; // ?
    expect(d).toBe(2)
  })
})