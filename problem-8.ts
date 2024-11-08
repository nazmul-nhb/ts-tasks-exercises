{
	class Car {
		constructor(
			public brand: string,
			public model: string,
			public year: number
		) {}

		displayInfo(): string {
			return `Your car model is: ${this.year} ${this.brand} ${this.model}`;
		}
	}

	const car = new Car("Toyota", "Corolla", 2020);

	console.log(car.displayInfo());

	//
}
