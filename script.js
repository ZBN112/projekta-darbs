const reactionButton = document.getElementById("ReactionButton");
const reactionTimeDisplay = document.getElementById("reactionTime");
let startTime, endTime, timeoutId;

function startReactionTimeTest() {
  reactionButton.style.backgroundColor = "red";
  reactionButton.disabled = true;


  const delay = getRandomDelay(1000, 5000);
  timeoutId = setTimeout(changeButtonColor, delay);
}

function changeButtonColor() {
  reactionButton.style.backgroundColor = "green";
  startTime = new Date().getTime();
  reactionButton.disabled = false;

  reactionButton.onclick = function () {
    endTime = new Date().getTime();
    const reactionTime = endTime - startTime;
    reactionTimeDisplay.textContent = `Tavs reakcijas laiks : ${reactionTime} ms`;
    clearTimeout(timeoutId); 
    reactionButton.style.backgroundColor = "red";
    reactionButton.disabled = true;
    reactionButton.onclick = null;
  };
}
refreshButton.addEventListener("click", function () {
  location.reload(); 
});

function getRandomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
