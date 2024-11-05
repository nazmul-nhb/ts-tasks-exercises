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

// Task #8
type User = {
	name: string;
	email: string;
};

type Admin = {
	adminLevel: string;
};

type AdminUser = User & Admin;

type DescribeAdmin = (user: AdminUser) => string;

const describeAdmin: DescribeAdmin = (user) => {
	return `${user.name}'s email is ${user.email} and he is a ${user.adminLevel} admin`;
};

const user: AdminUser = {
	name: "Abul",
	email: "abul@babul.com",
	adminLevel: "marattok",
};

console.log(describeAdmin(user));

// Task #9
type Employee = {
	name: string;
	address?: {
		country: string;
		city?: string;
	};
};

type GetEmployee = (employee: Employee) => string;

const getEmployeeCity: GetEmployee = (employee) => {
	return employee.address?.city || "Employee didn't provide city!";
};

const employee1: Employee = {
	name: "Babul",
	address: {
		country: "Bangudesh",
		city: "Faka",
	},
};

const employee2: Employee = {
	name: "Abul",
	address: {
		country: "India",
	},
};

console.log(getEmployeeCity(employee1));
console.log(getEmployeeCity(employee2));

// Task #10
type GetDisplayName = (name: string | null | undefined) => string;

const getDisplayName: GetDisplayName = (name) => {
	return name ?? "Anonymous";
};

console.log(getDisplayName("Habul"));
console.log(getDisplayName(null));
console.log(getDisplayName(""));
console.log(getDisplayName(undefined));

// Task #11
type HandleUnknown = (data: unknown) => string | number;

const processData: HandleUnknown = (data) => {
	if (typeof data === "string") {
		return data.toUpperCase();
	} else if (typeof data === "number") {
		return data * data;
	}

	return "Wrong Input!";
};

console.log(processData("mofiz"));
console.log(processData(33));
console.log(processData({ name: "mofiz" }));

// Task #12
type ErrorHandler = (message: string) => never;

const handleError: ErrorHandler = (msg) => {
	throw new Error(`Congrats! ${msg}`);
};

console.log(handleError("Expected Error Occurred!"));
