//create date object
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
month++;
//github is SUCKING
//print date in formation day/month/year
console.log(day + "/" + month + "/" + year);
console.log(`${day} / ${month} / ${year}`);
