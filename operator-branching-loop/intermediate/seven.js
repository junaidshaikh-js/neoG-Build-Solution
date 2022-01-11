// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

function whatDay(day) {
  day = day.toLowerCase();

  if (day == "saturday" || day == "Sunday") {
    return `${day} is weekend`;
  }

  return `${day} is weekday`;
}

console.log(whatDay("saturday"));
