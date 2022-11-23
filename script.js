const timeDiv = document.querySelector('.clock');
const bodyDiv = document.querySelector('.body_container');

timeUpd();
let updTime = setInterval(() => timeUpd(), 1000);


function timeUpd() {
	let time = new Date();
	let date = time;

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
		<h2>${date.toLocaleDateString()}</h2><h1 class="date-time">${hour}:${minute}:${second}</h1>`;
}
