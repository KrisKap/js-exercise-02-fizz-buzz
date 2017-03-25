// program wyswietla liczby z zakresu 1 do 100 w konsoli, z kilkoma wyjątakmi:
// 1. Jeśli liczba jest podzielna przez 3 i nie jest jednocześnie podzielna przez 5, zamiast niej wyswietla słowo "Fizz"
// 2. Jeśli liczba jest podzielna tylko przez 5 i nie jest jednocześnie podzielna przez 3, zamiast niej wyswietla słowo "Buzz"
// 3. Jeśli liczba jest podzielna przez 5 i przez 3, wyświetla słowo "FizzBuzz"


var number = 1

for (var i=0; i < 100; i++) {

	if (!(number % 5) && !(number % 3) ) {      	//test podzielnosci liczby jednoczesnie przez 5 i 3
		console.log("FizzBuzz");
	}
	
	else if (!(number % 3) && (number % 5)) {			//test podzielności liczby przez 3 i niepodzielności przez 5
		console.log("Fizz");
	}

	else if (!(number % 5) && (number % 3) ) {		// test podzielności liczby przez 5 i niepodzielności przez 3
		console.log("Buzz");
	}

	else {
		console.log(number);
	}

	number +=1;
	
}