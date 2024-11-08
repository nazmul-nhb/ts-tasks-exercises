{
	const reverseArray = <T>(elements: T[]): T[] => {
        // return elements.reverse();
        // or -->

		const revArray: T[] = [];

		elements.forEach((element) => revArray.unshift(element));

		return revArray;
	};

	console.log(reverseArray(["apple", "banana", "cherry"]));
	console.log(reverseArray([10, 20, 30]));

	//
}
