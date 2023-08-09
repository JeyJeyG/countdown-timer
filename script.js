const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");

let countdown;
let timerInterval;

function startTimer(seconds){
    clearInterval(timerInterval);

    const now = Date.now();
    const then = now + seconds*1000;
    
    displayTimeLeft(seconds);

    timerInterval = setInterval(()=> {
    const secondsLeft = Math.round((then - Date.now())/ 1000);
    
    if(secondsLeft < 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = 'Time\ s up!';
        return;
    }
    displayTimeLeft(secondsLeft);


}, 1000);

}
 function displayTimeLeft(seconds){
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds / 3600) /60);
    const remainingSeconds = seconds % 60;
    const display = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    timerDisplay.textContent = display;

 }
 startButton.addEventListener('click', () => {
    const seconds = parseInt(prompt('Enter the count down time in seconds:'), 10)
    if (!isNaN(seconds)){
        startTimer(seconds);

    }
  });

  resetButton.addEventListener('click', () =>  {
    clearInterval(timerInterval);
    timerDisplay.textContent = '00:00:00';
  } );

