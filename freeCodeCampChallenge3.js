/**
 * Todays free code camp challenge

   Given a distance in miles as a number, return the equivalent distance in kilometers.

The input will always be a non-negative number.
1 mile equals 1.60934 kilometers.
Round the result to two decimal places.
Tests
Waiting:1. convertToKm(1) should return 1.61.
Waiting:2. convertToKm(21) should return 33.8.
Waiting:3. convertToKm(3.5) should return 5.63.
Waiting:4. convertToKm(0) should return 0.
Waiting:5. convertToKm(0.621371) should return 1.
 */

function convertToKm(miles){
  let Km;
  Km = (miles*1.60934).toFixed(2)
  return Km;
}
console.log(convertToKm(1))
console.log(convertToKm(21))
console.log(convertToKm(3.5))
console.log(convertToKm(0))
console.log(convertToKm(0.621371))