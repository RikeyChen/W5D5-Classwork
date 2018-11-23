class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // this.printTime();
    // setInterval(_tick.bind(this), 1000);
    setInterval(this._tick.bind(this), 1000);

  }

  printTime() {
    // Format the time in HH:MM:SS
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    // Use console.log to print it.
    // this._tick();
  }

  // _tick() {
  //
  // }
}

Clock.prototype._tick = function() {
  // console.log(this);
  this.seconds += 1;
  this.printTime();
  // printTime();
  // 1. Increment the time by one second.
  // 2. Call printTime.
};

const clock = new Clock();
