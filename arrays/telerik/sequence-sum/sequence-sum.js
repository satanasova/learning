function findSum(arr,S) {
    let sum = 0,
        output = [];

    for (let i = 0; i < arr.length; i++) {
        sum = arr[i];
        for (let j = i + 1; j <= arr.length; j++) {
            if (sum === S) output.push(arr.slice(i, j));
            if (sum > S ) break;
            sum += arr[j];
        }
    }

    return output.length ? output : `There is no sequence with sum ${S}`;
}

console.log(findSum([4, 3, 1, 4, 2, 5, 8], 11));
console.log(findSum([4, 7, 11, 4, 2, 5, 8], 11));
console.log(findSum([4, 3, 1, 4, 2, 7, 5, 8], 11));