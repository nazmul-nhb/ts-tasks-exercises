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

// Task #4
interface Book {
	title: string;
	author: string;
	price: number;
	publishingYear: Date;
}

interface Magazine {
	title: string;
	publisher: string;
	price: number;
	publishingPeriod: number;
}

type EitherBookOrMagazine = Book | Magazine;
type BothBookAndMagazine = Book & Magazine;

// Must have all properties from Book or Magazine --> must satisfy at least one interface
const bookOrMagazine: EitherBookOrMagazine = {
	title: "Kaaler Kheya",
	author: "Habul",
	price: 500,
	// publishingYear: new Date(2009),
	// Optional Properties
	publisher: "Kaaler Kantho",
	publishingPeriod: 1,
};

// Need all the properties
const bookAndMagazine: BothBookAndMagazine = {
	title: "Kaaler Kheya",
	author: "Babul",
	price: 5000,
	publishingYear: new Date(2010),
	publisher: "Kaaler Kantho",
	publishingPeriod: 2,
};

// Task #5
type ReverseString = (str: string) => string;

const reverseString: ReverseString = (str) => {
	const result = str.split("").reverse().join("");
	return result;
};

console.log(reverseString("hello"));

// Task #6
type GetSumOfAllNumbers = (...numbers: number[]) => number;

const getSumOfAllNumbers: GetSumOfAllNumbers = (...numbers) => {
	const sum = numbers.reduce((acc, number) => acc + number, 0);
	return sum;
};

console.log(getSumOfAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Task #7
type GetLengthOrSquare = (arg: string | number) => number;

const getLengthOrSquare: GetLengthOrSquare = (arg) => {
	if (typeof arg === "string") {
		return arg.length;
	}
	return arg * arg;
};

console.log(getLengthOrSquare("hablu"));
console.log(getLengthOrSquare(11));
