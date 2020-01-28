function maxPrimeNumber(N) {
    const allNumbers = [],
        primeNumbers = [],
        maxDevider = Math.sqrt(N);

    for (let i = 0; i <= N; i++) {
        allNumbers.push(true);     
    }

    for (let i = 2; i < maxDevider; i++) {
        if(allNumbers[i]){                          //!
            for (let j = i*i; j <= N; j += i) {      //!
                    allNumbers[j] = false;
            }
        }
    }

    for (let i = 2; i < allNumbers.length; i++) {
        if(allNumbers[i]){
            primeNumbers.push(i);
        }   
    }

    return Math.max(...primeNumbers);
}

console.log(maxPrimeNumber(100));
console.log(maxPrimeNumber(113));
