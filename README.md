# rect-zoom-transforms

Calculate the scaling and translations required to zoom and pan from one rectangle to another rectangle within the first.

## Usage ##

```js
var rectZoomTransforms = require('rect-zoom-transforms');

// originalRect and targetRect are expected to have the properties `x`, `y`, `width`, `height`.
rectZoomTransforms(originalRect, targetRect);
```

Returns an object:

```js
{
  scale: {
    // x and y are numbers between 0 and 1
    x,
    y
  },
  translate: {
    // x and y are numeric translation distances in pixels
    x,
    y,
    // xPercent and yPercent are values between 0 and 100
    xPercent,
    yPercent 
  }
}
```

## License ##

MIT