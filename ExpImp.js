//  lib/math.js
//exporting functionality
//is math.js file
export function sum (x, y) { return x + y }
export var pi = 3.141593

//-----------------------------------------------------------------------------
//  someApp.js
//assuming this is another file, we import the functionality from math.js
//import everything as object from path
import * as math from "lib/math"
console.log("2π = " + math.sum(math.pi, math.pi))

//-----------------------------------------------------------------------------
//  otherApp.js
//assuming this is also another file, we import the functionality from math.js
//import {sum, pi} from path
import { sum, pi } from "lib/math"
console.log("2π = " + sum(pi, pi))
