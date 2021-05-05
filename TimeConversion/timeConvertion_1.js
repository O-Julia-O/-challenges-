/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

/* 
    * The function is expected to return a STRING.
    * The function accepts STRING s as parameter.
*/

function timeConversion(s) {
    let AMPM = s.slice(-2);
    let timeArr = s.slice(0, -2).split(":");
    
    if (AMPM === "AM" && timeArr[0] === "12") {
        timeArr[0] = "00";
    } else if (AMPM === "PM") {
        timeArr[0] = (timeArr[0] % 12) + 12;
    }
    
    return timeArr.join(":");
}