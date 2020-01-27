// Description
// Write a program that finds in given array of integers all combinations of sums that are equal to a given number (if present)


function binaryCombo(arr, S) {
    const binaryLength = Math.pow(2, arr.length),
        combos = [];
    // console.log(binaryLength);
    for (let i = 0; i < binaryLength; i++) {
        let singleCombo = [];
        let binaryStr = i.toString(2).padStart(arr.length, '0');
        // console.log(binaryStr);
        for (let j = 0; j < binaryStr.length; j++) {
            if (binaryStr[j] === '1') {
                // console.log(args[j]);
                singleCombo.push(arr[j]);
            }
        }

        combos.push(singleCombo);
    }

    const combosSums = combos.map(arr => ({
        arr,
        sum: arr.reduce((sum, cur) => (sum + cur), 0)
    }));
    combosSums.filter(arr => arr.sum === S).forEach(arr => console.log(arr.arr));
}

binaryCombo([4, 3, 1, 4, 2, 5, 8], 11);
