{
	// define function type
	type RepeatString = (str: string, num: number) => string;

	const repeatString: RepeatString = (str, num) => {
		return str.repeat(num);
	};


    console.log(repeatString("Hello!", 3));
	//
}
