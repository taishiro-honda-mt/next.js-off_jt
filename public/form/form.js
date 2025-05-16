const form = document.getElementById("survey");
form.addEventListener("submit", (e) => {
	e.preventDefault();

	try {
		const name = document.getElementById("name");
		const age = document.getElementById("age");
		const job = document.getElementById("job");
		const intro = document.getElementById("intro");

		// 名前の必須チェック
		if (name.value !== "") {
			document.getElementById("nameError").style.display = "none";
		} else {
			document.getElementById("nameError").style.display = "block";
			throw new Error("名前を入力してください");
		}
		// 年齢必須チェック
		if (age.value !== "") {
			document.getElementById("ageRequiredError").style.display = "none";
			document.getElementById("ageError").style.display = "block";
		} else {
			document.getElementById("ageRequiredError").style.display = "block";
			throw new Error("年齢を入力してください");
		}

		// 年齢18歳以上チェック
		if (age.value > 18) {
			document.getElementById("ageError").style.display = "none";
		} else {
			document.getElementById("ageError").style.display = "block";
			throw new Error("年齢は18歳以上で入力してください");
		}

		const data = {
			name: name.value.trim(),
			age: age.value,
			job: job.value,
			intro: intro.value.trim(),
		};

		console.log("送信データ:", JSON.stringify(data, null, 2));
	} catch (err) {
		console.error("エラー：", err.message);
		return;
	}
});
