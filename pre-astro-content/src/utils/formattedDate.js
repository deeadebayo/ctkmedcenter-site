const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getOrdinalSuffix = (n) =>
  n > 3 && n < 21
    ? "th"
    : n % 10 == 2
      ? "nd"
      : n % 10 == 2
        ? "nd"
        : n % 10 == 3
          ? "rd"
          : "th";

export const getFormattedHealthyDate = (date) =>
  `${days[date.getDay()]} the ${date.getDate() + getOrdinalSuffix(date)}`;

export const getCurrentYear = (date) => date.getFullYear();
