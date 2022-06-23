const sum = (a, b) => a + b

describe('sum()', () => {
  it('should return 5 if given 2 and 3 ', () => {
    expect(sum(2, 3)).toBe(5)
  })
})

describe('sum()', () => {
  it('should return 10 if given 2 and 8 ', () => {
    expect(sum(2, 8)).toBe(10)
  })
})