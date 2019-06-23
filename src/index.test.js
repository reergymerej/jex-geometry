import * as mod from '.'

describe('with position', () => {
  it('should have calculated bounds', () => {
    const rectangle = { width: 100, height: 10 }
    const position = { x: 33, y: 66 }
    expect(mod.bounds(rectangle, position)).toEqual({
      top: 66,
      left: 33,
      right: 133,
      bottom: 76,
    })
  })
})

it('inRange', () => {
  expect(mod.inRange(1, mod.range(0, 5))).toBe(true)
  expect(mod.inRange(6, mod.range(0, 5))).toBe(false)
})

describe('intersect', () => {
  describe('ranges', () => {
    it('should intersect', () => {
      expect(mod.rangesIntersect(
        mod.range(0, 10),
        mod.range(0, 10)
      )).toBe(true)

      expect(mod.rangesIntersect(
        mod.range(0, 10),
        mod.range(11, 1)
      )).toBe(false)

      expect(mod.rangesIntersect(
        mod.range(0, 10),
        mod.range(5, 12)
      )).toBe(true)

      expect(mod.rangesIntersect(
        mod.range(5, 12),
        mod.range(0, 10)
      )).toBe(true)
    })
  })

  describe('bounds', () => {
    it('should detect bound intersections', () => {
      const a = { top: 0, left: 0, right: 100, bottom: 100 }
      const b = { top: 0, left: 0, right: 100, bottom: 100 }
      expect(mod.boundsIntersect(a, b)).toBe(true)
    })

    it('should detect non intersections', () => {
      const a = mod.bounds(
        { width: 20, height: 20 },
        { left: 0, top: 10 }
      )
      const b = mod.bounds(
        { width: 20, height: 20 },
        { left: 0, top: 41 }
      )
      expect(mod.boundsIntersect(a, b)).toBe(false)
      expect(mod.boundsIntersect(b, a)).toBe(false)
    })
  })
})
