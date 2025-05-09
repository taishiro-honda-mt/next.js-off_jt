const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");
const resetButton = document.getElementById("reset-button");
let count = 0;
const counter = document.getElementById("counter");
plusButton.addEventListener("click", () => {
	count++;
	counter.textContent = count;
});

minusButton.addEventListener("click", () => {
	count--;
	counter.textContent = count;
});
resetButton.addEventListener("click", () => {
	count = 0;
	counter.textContent = count;
});
