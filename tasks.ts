// Task #2
type Role = "admin" | "user" | "guest";

const logValues = (name: string, age: number, role: Role): void => {
	console.log(`${name} is ${age} years old, working as ${role}`);
};

logValues("Abul", 35, "guest");

// Task #3
type Person = {
	name: string;
	address: string;
	hairColor: string;
	eyeColor: string;
	income: number;
	expense: number;
	hobbies: string[];
	familyMembers: string[];
	job: string;
	skills: string[];
	isMarried: boolean;
	friends: string[] | null;
};

const person: Person = {
	name: "Abul",
	address: "Sirajganj",
	hairColor: "white",
	eyeColor: "dark",
	income: 5000,
	expense: 4999,
	hobbies: ["telbaaji", "chatukari", "pach lagano"],
	familyMembers: ["Habul", "Babul", "Mokbul"],
	job: "Driver",
	skills: ["driving", "telbaaji", "chatukari", "pach lagano"],
	isMarried: true,
	friends: null,
};
