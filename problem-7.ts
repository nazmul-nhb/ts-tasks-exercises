{
	const logString = (arg: unknown): void => {
		if (typeof arg === "string") {
			console.log(arg);
		} else {
			console.error("Input is not a string!");
		}
	};

	logString(5);
	logString("Hello");

	//
}
