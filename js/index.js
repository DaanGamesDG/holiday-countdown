const documentDays = document.getElementById("countdown-days");
const documentHours = document.getElementById("countdown-hours");
const documentMinutes = document.getElementById("countdown-minutes");
const documentSeconds = document.getElementById("countdown-seconds");

const updateCountdown = () => {
	const date = new Date("July 10, 2021 00:00:00").getTime();
	const remaining = date - new Date().getTime();

	const seconds = 1000;
	const minutes = seconds * 60;
	const hours = minutes * 60;
	const days = hours * 24;

	const remainingDays = Math.floor(remaining / days);
	const remainingHours = Math.floor((remaining % days) / hours);
	const remainingMinutes = Math.floor((remaining % hours) / minutes);
	const remainingSeconds = Math.floor((remaining % minutes) / seconds);

	documentDays.innerText = remainingDays;
	documentHours.innerText = remainingHours;
	documentMinutes.innerText = remainingMinutes;
	documentSeconds.innerText = remainingSeconds;
};

updateCountdown();
setInterval(() => updateCountdown(), 1e3);
