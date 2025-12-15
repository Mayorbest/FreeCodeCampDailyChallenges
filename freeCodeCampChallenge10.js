/**
 * Given the speed you are traveling in miles per hour (MPH), and a speed limit in kilometers per hour (KPH), determine whether you are speeding and if you will get a warning or a ticket.

1 mile equals 1.60934 kilometers.
If you are travelling less than or equal to the speed limit, return "Not Speeding".
If you are travelling 5 KPH or less over the speed limit, return "Warning".
If you are travelling more than 5 KPH over the speed limit, return "Ticket".
Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Waiting:1. speedCheck(30, 70) should return "Not Speeding".
Waiting:2. speedCheck(40, 60) should return "Warning".
Waiting:3. speedCheck(40, 65) should return "Not Speeding".
Waiting:4. speedCheck(60, 90) should return "Ticket".
Waiting:5. speedCheck(65, 100) should return "Warning".
Waiting:6. speedCheck(88, 40) should return "Ticket".
 */

function speedCheck (speedMph,SpeedLtdKph) {
    speedMph = speedMph * 1.60934;
    if(speedMph < SpeedLtdKph) {
        speedMph = 'Not speeding'
    } else if (speedMph <= (SpeedLtdKph-5)) {
        speedMph = 'Warning'
    }else if (speedMph >= (SpeedLtdKph + 5)) {
        speedMph = 'Ticket'
    }
    return speedMph;
}

console.log(speedCheck(30, 70));
console.log(speedCheck(40, 60));
console.log(speedCheck(40, 65));
console.log(speedCheck(60, 90));
console.log(speedCheck(65, 100));
console.log(speedCheck(88, 40));