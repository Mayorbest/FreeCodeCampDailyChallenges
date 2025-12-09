/**
 iven a weight in pounds as a number, return the string "(lbs) pounds equals (kgs) kilograms.".

Replace "(lbs)" with the input number.
Replace "(kgs)" with the input converted to kilograms, rounded to two decimals and always include two decimal places in the value.
1 pound equals 0.453592 kilograms.
If the input is 1, use "pound" instead of "pounds".
If the converted value is 1, use "kilogram" instead of "kilograms".
Tests
Waiting:1. convertToKgs(1) should return "1 pound equals 0.45 kilograms.".
Waiting:2. convertToKgs(0) should return "0 pounds equals 0.00 kilograms.".
Waiting:3. convertToKgs(100) should return "100 pounds equals 45.36 kilograms.".
Waiting:4. convertToKgs(2.5) should return "2.5 pounds equals 1.13 kilograms.".
Waiting:5. convertToKgs(2.20462) should return "2.20462 pounds equals 1.00 kilogram.".
 */

function convertToKgs(Ibs) {
  let kg = Ibs*0.453592
  let result = '';
  if(kg <= 1){result = `${Ibs.toFixed(2)} pound equals ${kg.toFixed(2)} kilogram.`} else{
    result = `${Ibs.toFixed(2)} pounds equals ${kg.toFixed(2)} kilogram`
  };
  return result;
}

console.log(convertToKgs(1))
console.log(convertToKgs(0))
console.log(convertToKgs(100))
console.log(convertToKgs(2.5))
console.log(convertToKgs(2.20462))