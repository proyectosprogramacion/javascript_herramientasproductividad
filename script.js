const startBtn = document.getElementById('btn-start');
const session = document.getElementById('minutes');
let myInterval;
let state = true;

const appTimer = () => {
  const sessionAmount = Number.parseInt(session.textContent)

  if (state) {
    state = false;
    let totalSeconds = sessionAmount * 60;

    const updateSeconds = () => {
      const minuteDiv = document.getElementById('minutes');
      const secondDiv = document.getElementById('seconds');

      totalSeconds--;

      let minutesLeft = Math.floor(totalSeconds / 60);
      let secondsLeft = totalSeconds % 60;

      if (secondsLeft < 10) {
        secondDiv.textContent = '0' + secondsLeft;
      } else {
        secondDiv.textContent = secondsLeft;
      }
      minuteDiv.textContent = `${minutesLeft}`

      if (minutesLeft === 0 && secondsLeft === 0) {
        bells.play()
        clearInterval(myInterval);
      }
    }
    myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert('Session has already started.')
  }
}


startBtn.addEventListener('click', appTimer);
