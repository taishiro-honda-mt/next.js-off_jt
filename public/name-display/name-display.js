const input = document.getElementById("input");
const submit = document.getElementById("submit");
const output = document.getElementById("output");
submit.addEventListener("click", () => {
	if (input.value.trim() === "") {
		output.innerText = "名前を入力してください";
		output.style.color = "red";
	} else {
		const name = input.value;
		output.innerText = `こんにちは、${input.value}さん！`;
		output.style.color = "black";
	}
});
