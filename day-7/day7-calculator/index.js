import {

add,

subtract,

multiply,

divide,

square,

cube

} from "./math.js";

import {fahrenheitToCelsius,celsiusToFahrenheit} from "./temperature.js";


console.log("Calculator Application");

console.log("----------------------");

console.log("10 + 5 =", add(10,5));

console.log("10 - 5 =", subtract(10,5));

console.log("10 * 5 =", multiply(10,5));

console.log("10 / 5 =", divide(10,5));

console.log("Square of 5 =", square(5));

console.log("Cube of 5 =", cube(5));

console.log("Celsius to Fahrenheit: 25°C =", celsiusToFahrenheit(25));

console.log("Fahrenheit to Celsius: 77°F =", fahrenheitToCelsius(77));