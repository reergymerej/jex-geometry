export const inRange = (value, [min, max]) => min <= value && value <= max

export const range = (start, end) => [start, start + end]

const rangeFromBounds = (axis) => (bounds) => (axis === 'x')
  ? range(bounds.left, bounds.right - bounds.left)
  : range(bounds.top, bounds.bottom - bounds.top)

const xRangeFromBounds = rangeFromBounds('x')
const yRangeFromBounds = rangeFromBounds('y')

export const rangesIntersect = (a, [min, max]) =>
  inRange(min, a)
  || inRange(max, a)

export const bounds = (rectangle, position) => {
  const [left, right] = range(position.x, rectangle.width)
  const [top, bottom] = range(position.y, rectangle.height)
  return {
    left,
    right,
    top,
    bottom,
  }
}

export const boundsIntersect = (a, b) => {
  const aXRange = xRangeFromBounds(a)
  const bXRange = xRangeFromBounds(b)
  const aYRange = yRangeFromBounds(a)
  const bYRange = yRangeFromBounds(b)
  return rangesIntersect(aXRange, bXRange)
    && rangesIntersect(aYRange, bYRange)

}
