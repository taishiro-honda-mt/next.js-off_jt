type User = {
	name: string;
	age: number;
};

const user: User = {
	name: "Hanako",
	age: 22,
};

const fruits: string[] = ["りんご", "バナナ", "みかん"];

function getProfile(user: User): string {
	return `${user.name} (${user.age}歳)`;
}
