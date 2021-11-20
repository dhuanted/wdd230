let tempF = parseFloat(document.getElementById("temp").innerHTML);
let speedF = parseFloat(document.getElementById("speed").innerHTML);
// calculate the wind chill factor as a temperature in Fahrenheit
let f =
  35.74 +
  0.6215 * tempF -
  35.75 * Math.pow(speedF, 0.16) +
  0.4275 * tempF * Math.pow(speedF, 0.16);
// return wind chill factor the calling function, rounding to 1 decimals
// return f.toFixed(1);
document.getElementById("windchill").innerHTML = f.toFixed(1) + " mph";
console.log(tempF);
console.log(speedF);
