{
	// define function type
	type FilterEvenNumbers = (numbers: number[]) => number;

	const findLargestNumber: FilterEvenNumbers = (numbers) => {
		let largestNum: number = numbers[0];

		for (const number of numbers) {
			if (number > largestNum) {
				largestNum = number;
			}
		}

		return largestNum;
	};

	console.log(findLargestNumber([10, 5, 8, 20, 3]));

	//
}
