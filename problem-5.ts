{
	interface Student {
		name: string;
		age: number;
		grades: number[];
	}

	const student1: Student = {
		name: "Bob",
		age: 17,
		grades: [75, 80, 82, 88, 90],
	};

	const calculateAverageGrade = (student: Student): number => {
		return (
			student.grades.reduce((acc, grade) => acc + grade, 0) /
			student.grades.length
		);
	};

	console.log(calculateAverageGrade(student1));
	//
}
