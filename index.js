import { Timer } from './timer.js';

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
document.documentElement.style.setProperty('--perimeter', perimeter * -1);

const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart() {
		console.log('Started!');
		if (circle.style.animation == '') {
			console.log('Animation has been set');
			circle.style.animation = `countdown ${durationInput.value}s linear forwards`;
		}
		circle.style.animationPlayState = 'running';
	},
	onPause() {
		console.log('Paused!');
		circle.style.animationPlayState = 'paused';
	},
	onTick() {},
	onComplete() {
		alert('Timer complete!');
	}
});
