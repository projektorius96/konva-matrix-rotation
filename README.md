### Konva rotation matrix

> Credits to [TLMaths by Jack Brown](https://youtu.be/Q5B9Xy-cqjA?list=PLg2tfDG3Ww4udj7J3tTK9a5ROO1MjPm5w&t)

> More in depth explanation that reflects the logic hooked into [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) coming soon...

**TL;DR** Briefly, with reference to [Canvas#transforms](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms) the `.setTransform(m11, m12, m21, m22, ...rest)` corresponds to `x*cos, y*sin, x*-sin, y*cos)` respectively. _Perhaps the most confusing part can be `m21` that suppose to be `x` "attached" to `cos` becomes `x` "attached" to `sin` instead , and most importantly, negative! `sin`, with respect to anti-clockwise rotation around origin of `unit of circle`_ ; likewise `m22` that suppose to be `y` "attached" to `sin` becomes `y` "attached" to, in this case, positive! `cos`. To better understand, I am highly recommend to watch the video on TLMaths !!!


**Related**
- [Konva.js](https://konvajs.org/)