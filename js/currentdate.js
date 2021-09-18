/** FIRST METHOD **/
// const todaysdate = new Date();
// console.log(todaysdate);

/** SECOND METHOD **/
// toLocaleDateString
/* const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  document.getElementById("currentdate").textContent =
    new Date().toLocaleDateString("en-US", options);
*/

/** THIRD METHOD **/
// day names array
 const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// long month names array
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

/*
const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const currentdate = dayName + ', ' + todaysdate.getDate() + ' ' + monthName + ', ' + todaysdate.getFullYear();

document.getElementById('currentdate').textContent = currentdate;
*/

/** FOURTH METHOD **/
const d = new Date();
const dayName = dayNames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
// This is called TEMPLATE LITERAL:
const fulldate = `${dayName}, ${d.getDate()} ${monthName}, ${year}`;
document.getElementById("currentdate").textContent = fulldate;

document.getElementById("currentYear").textContent = d.getFullYear();

let vLastModified = new Date(document.lastModified);
document.getElementById("lastModified").textContent = vLastModified;