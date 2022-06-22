const timeDiv = document.querySelector('.clock');
const weatherDiv = document.querySelector('.weather');

let updTime = setInterval(() => timeUpd(), 1000);
timeUpd();
weatherUpd();

function timeUpd() {
	let time = new Date();

	let dayOfWeek = time.getDay();
	switch (dayOfWeek) {
		case 1:
			dayOfWeek = 'Понедельник';
			break;
		case 2:
			dayOfWeek = 'Вторник';
			break;
		case 3:
			dayOfWeek = 'Среда';
			break;
		case 4:
			dayOfWeek = 'Четверг';
			break;
		case 5:
			dayOfWeek = 'Пятница';
			break;
		case 6:
			dayOfWeek = 'Суббота';
			break;
		case 7:
			dayOfWeek = 'Воскресенье';
			break;
		default:
			dayOfWeek = 'Ошибка даты';
			break;
	}

	let hour = time.getHours();
	if (hour < 10) {
		hour = '0' + hour;
	}
	let minute = time.getMinutes();
	if (minute < 10) {
		minute = '0' + minute;
	}
	let second = time.getSeconds();
	if (second < 10) {
		second = '0' + second;
	}
	timeDiv.innerHTML = `
		<h1>${dayOfWeek}, ${hour}:${minute}:${second}</h1>
	`;
}
function weatherUpd() {

	let temp;
	let location;
	let condition;
	// let condIcon;
	fetch('http://api.weatherapi.com/v1/current.json?key=f1c58ace0a7b44a1b8b92424222206&q=Moscow&aqi=no')
		.then((response) => response.json())
		.then(function (data) {
			location = data.location.name;
			temp = data.current.temp_c;
			condition = data.current.condition.text;
			// condIcon = data.current.condition.icon;
			weatherDiv.innerHTML = `
			<h2>${location}, ${temp}°<br>${condition}</h2>
		`;
		});
}

//<img class="cond-icon" src="${condIcon}" alt="">