// let currDate = new Date();
// console.log(currDate);

// console.log(new Date().toLocaleString()); // Used for viewing the exact date and time at VS Code only!

// console.log(new Date().toString()); // Browser type viewing option

// console.log(Date.now()); // Returns the numeric value corresponding to the current time- the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.


// new Date(year, month, ...)
// 7 numbers specify year, month, day, hour, minute, second and millisecond (in that order)
// In JS months count from 0 to 11 (Jan-0 Dec-11)
// Year and Month argument is compulsory.

// let d = new Date(2023, 9, 9, 12, 8, 52, 650);
// console.log(d);
// console.log(d.toString());


// dateString method

// let d = new Date("October 13, 2023 12:13:58");
// console.log(d);
// console.log(d.toString());


// console.log(Date.now()); //1696833799574
// console.log(new Date(1696833799574));


// let currDate = new Date();

// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth()); //0-11
// console.log(currDate.getDate());
// console.log(currDate.getDay()); // 1-Mon to 7-Sun

// .setFullYear(2023);, .setFullYear(2023, 9, 13);, .setMonth(9);, setDate(13);


// ### TIME METHODS

// let currTime = new Date();
// console.log(currTime.getTime()); //Number of milli seconds since January 1, 1970.
// console.log(currTime.getHours()); // Hours of a date as a number (0-23)

// console.log(currTime.getMinutes());
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());



// Set time methods


// console.log(new Date().toLocaleTimeString()); // Only show the time.

// console.log(new Date().toLocaleDateString()); // Only show the date.