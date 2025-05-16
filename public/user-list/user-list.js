document.addEventListener("DOMContentLoaded", () => {
	const error = document.getElementById("error");
	const userList = document.getElementById("userList");
	const loading = document.getElementById("loading");
	fetch("https://jsonplaceholder.typicode.com/users")
		.then((res) => res.json())
		.then((users) => {
			loading.style.display = "none";
			for (const user of users) {
				const li = document.createElement("li");
				li.textContent = user.name;
				userList.appendChild(li);
			}
		})
		.catch((err) => {
			loading.style.display = "none";
			error.innerText = "データの取得に失敗しました";
			console.error("通信エラー", err);
		});
});
