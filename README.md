Measure
=======

Because I am tired of converting inches and millimeters.

Simple class storing the measure value, in inches or millimeters. And
automatically get the measure in the converted value.

```js
// By default, the values are considered in inches.
// Check Measure.isInInch to know if it is in inches or in millimeters

console.log(Measure.isInInch);  // => true

var width = new Measure(6);  // 6 inches (automatic choice)
var height = new Measure(5);  // 5 inches (automatic choice)
var ruler = new Measure(200, false);  // 200 millimeters

console.log("Get values in inches:");
console.log("width = " + width.get() + " in");
console.log("height = " + height.get() + " in");
console.log("ruler = " + ruler.get() + " in");
// => Get values in inches:
// => width = 6 in
// => height = 5 in
// => ruler = 7.874016 in

Measure.isInInch = false;
console.log("Get values in millimeters:");
console.log("width = " + width.get() + " mm");
console.log("height = " + height.get() + " mm");
console.log("ruler = " + ruler.get() + " mm");
// => Get values in millimeters:
// => width = 152.39999999999998 mm
// => height = 127 mm
// => ruler = 200 mm

width.set(5, true);  // 5 inches
console.log("now width = " + width.get(true) + " in");
console.log("which is " + width.get() + " mm");
// => now width = 5 in
// => which is 127 mm

ruler.set(500); // 500 millimeters (automatic choice)
console.log("now ruler = " + ruler.get() + " mm");
// => now ruler = 500 mm
```
