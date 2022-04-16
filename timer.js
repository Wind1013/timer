export class Timer {
	constructor(durationInput, startButton, pauseButton, callbacks) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		this.started = false;
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onPause = callbacks.onPause;
			this.onComplete = callbacks.onComplete;
		}
		this.durationInput.addEventListener('blur', this.timeSet);
		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}
	timeSet = () => {
		console.log('Time has been set!');
		this.initialTime = this.timeRemaining;
	};
	start = () => {
		if (this.onStart) {
			this.onStart();
		}
		this.tick();
		this.interval = setInterval(this.tick, 1000);
	};
	pause = () => {
		this.onPause();
		clearInterval(this.interval);
	};
	tick = () => {
		if (this.timeRemaining <= 0) {
			this.onComplete();
			this.pause();
		} else {
			this.onTick();
			this.timeRemaining = this.timeRemaining - 1;
		}
	};
	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}
	set timeRemaining(time) {
		this.durationInput.value = time.toFixed(0);
	}
}
