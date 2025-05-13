const form = document.getElementById("survey");
form.addEventListener("submit", (e) => {
	e.preventDefault();

	const name = document.getElementById("name");
	const age = document.getElementById("age");
	const job = document.getElementById("job");
	const intro = document.getElementById("intro");
	let hasError = false;
	// 名前の必須チェック
	if (name.value === "") {
		hasError = true;
		document.getElementById("nameError").style.display = "block";
	} else {
		document.getElementById("nameError").style.display = "none";
	}
	// 年齢必須チェック
	if (age.value === "") {
		hasError = true;
		document.getElementById("ageRequiredError").style.display = "block";
		document.getElementById("ageError").style.display = "none";
	} else {
		document.getElementById("ageRequiredError").style.display = "none";

		// 年齢18歳以上チェック
		if (age.value < 18) {
			hasError = true;
			document.getElementById("ageError").style.display = "block";
		} else {
			document.getElementById("ageError").style.display = "none";
		}
	}
	if (hasError) return;

	const data = {
		name: name.value.trim(),
		age: age.value,
		job: job.value,
		intro: intro.value.trim(),
	};
	console.log("送信データ:", JSON.stringify(data, null, 2));
});
