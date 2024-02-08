// export const weekNames = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

export const weekNames = Array.from({ length: 7 }, (_, index) => {
  const date = new Date(2024, 0, index + 1); // Use any date for reference
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
});

export const monthNames = [
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
  "December",
];
