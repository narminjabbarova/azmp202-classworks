const startButton = document.getElementById('startButton');
const timeInput = document.getElementById('timeInput');
const output = document.getElementById('output');

let timer;

startButton.addEventListener('click', () => {
  const startTime = parseInt(timeInput.value);

  if (isNaN(startTime) || startTime <= 0) {
    output.textContent = "Please enter a valid time!";
    return;
  }

  clearInterval(timer);
  let currentTime = startTime;

  output.textContent = currentTime;

  timer = setInterval(() => {
    currentTime -= 1;
    if (currentTime >= 0) {
      output.textContent = currentTime;
    } else {
      clearInterval(timer);
      output.textContent = "Finish time";
    }
  }, 1000);
});