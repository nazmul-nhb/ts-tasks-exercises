{
	// define function type
	type FilterEvenNumbers = (numbers: number[]) => number[];

	const filterEvenNumbers: FilterEvenNumbers = (numbers) => {
		const evenNumbers: number[] = [];

		for (const number of numbers) {
			if (number % 2 === 0) {
				evenNumbers.push(number);
			}
		}

		return evenNumbers;
	};

    console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

	//
}
