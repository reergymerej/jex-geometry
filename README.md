# jex-geometry

```js
import * as mod from 'jex-geometry'
```



get a range from start and length
```js
mod.range(9, 5)  // (start, length)
// [9, 14]  [min, max]
```

check if a value is within a range
```js
mod.inRange(1, mod.range(0, 5))
// true

mod.inRange(6, mod.range(0, 5))
// false
```


test for range intersections
```js
mod.rangesIntersect(
  mod.range(5, 12),
  mod.range(0, 10)
)
// true
```

gets bounds for a rectangle at a position
```js
const rectangle = { width: 100, height: 10 }
const position = { x: 33, y: 66 }
mod.bounds(rectangle, position)

/*
{
  top: 66,
  left: 33,
  right: 133,
  bottom: 76,
}
*/
```

check if bounds intersect
```js
const a = mod.bounds(
  { width: 20, height: 20 },
  { left: 0, top: 10 }
)
const b = mod.bounds(
  { width: 20, height: 20 },
  { left: 0, top: 41 }
)

mod.boundsIntersect(a, b)
// false
```
