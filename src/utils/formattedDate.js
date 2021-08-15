const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
console.log(days[date.getDay()], date.getDate());


export const getFormattedDayDate = (date) => `It's ${days[date.getDay()]} the ${date.getDate()}`
