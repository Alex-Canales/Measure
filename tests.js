/*global Measure*/

function equals(a, b) {
    return Math.abs(a - b) <= 0.001;
}

function tests() {
    var unit = new Measure(2);
    if(unit.get() !== 2) {
        console.error("Initialisation error for inches.");
        return false;
    }

    var unitTestInitMm = new Measure(200, false);
    if(unitTestInitMm.get() === 500) {
        console.error("Initialisation error for millimeters.");
        return false;
    }

    if(unit.get(false) !== unit.get() * Measure.INCH_TO_MILLIMETER ) {
        console.error("Equality error: same unit conversion");
        return false;
    }

    var unitMm = new Measure(unit.get(false), false);
    if(equals(unitMm.get(), unit.get()) === false) {
        console.error("Different gets (in)");
        return false;
    }

    Measure.isInInch = false;
    unitMm = new Measure(50);

    if(unitMm.get() !== 50) {
        console.error("Equality error: same unit");
        return false;
    }

    if(unitMm.get(true) !== unitMm.get() * Measure.MILLIMETER_TO_INCH ) {
        console.error("Equality error: same unit conversion");
        return false;
    }

    unit = new Measure(unitMm.get(true), true);
    if(equals(unitMm.get(), unit.get()) === false) {
        console.error("Different gets (mm)");
        return false;
    }


    console.log("Tests OK");
}

function tutorial() {
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
}

tests();
// tutorial();
