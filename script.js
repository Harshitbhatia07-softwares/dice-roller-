const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");

let historyList = [];

const diceFaces = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6);
    diceEl.innerHTML = diceFaces[rollResult];
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory() {
    rollHistoryEl.innerHTML = historyList
        .map((roll, index) => `<li>Roll ${index + 1}: <span>${diceFaces[roll]}</span></li>`)
        .join("");
}

buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();
    }, 1000);
});
