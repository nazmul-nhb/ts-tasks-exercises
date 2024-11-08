{
	type Book = {
		title: string;
		author: string;
		publishedYear: number;
	};

	const book1: Book = {
		title: "Sample Book",
		author: "John Doe",
		publishedYear: 2019,
	};

	const isRecentBook = (book: Book): boolean => {
		const timeDiff = new Date().getFullYear() - book.publishedYear;

		if (timeDiff <= 5) {
			return true;
		}

		return false;
	};

	console.log(isRecentBook(book1));

	//
}
