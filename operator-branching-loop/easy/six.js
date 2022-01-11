// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

function findDays(month) {
  const index = months.indexOf(month.toLowerCase());

  let year = new Date().getFullYear();

  let newDate = new Date(year, index, 31);

  if (newDate.getDate() == 31) {
    return "This month has 31 days";
  }

  return "This month doesn't have 31 days";
}

console.log(findDays("january"));
