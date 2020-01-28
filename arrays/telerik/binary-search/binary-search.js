function search(args) {
    args.shift();
    const num = +args.pop(),
        array = args.map(Number),
        len = array.length,
        startIdx = 0,
        endIdx = len - 1;
    
    // IIFE
    return (function binarySearch_Recursion(arr, startIndex, endIndex, numberToFind) {
        const midIndex = Math.floor(startIndex + (endIndex - startIndex)/2)
        // console.log(`arr: ${arr}, first el: ${arr[startIndex]}, last el: ${arr[endIndex]}, mid: ${arr[midIndex]}, num: ${numberToFind}`);
        if (startIndex > endIndex) {
            return -1;
        }
        if (numberToFind === arr[midIndex]) {
            if (arr[midIndex] === arr[midIndex - 1]) {
                return midIndex - 1;
            } else return midIndex;
        } else if (numberToFind <= arr[midIndex]) {
            // console.log('<');
            return binarySearch_Recursion(arr, startIndex, midIndex - 1, numberToFind);
        } else if (numberToFind >= arr[midIndex]) {
            // console.log('>')
            return binarySearch_Recursion(arr, midIndex + 1, endIndex, numberToFind);
        } 
    }(array, startIdx, endIdx, num));
    // Or:  
    // return binarySearch_Recursion(array, startIdx, endIdx, num);
    // ?
}

console.log('binarySearch_Recursion:');
console.log(search(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '99']));
console.log(search(['10', '1', '2', '4', '16', '16', '31', '64', '64', '64', '99', '16'])); // If there is more than one occurence print the first one 
console.log(search(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '3']));


function binarySearch(args) {
    const array = args.map(Number),
        numberToFind = array.pop(),
        [len, ...arr] = array;
    let index = -1,
        startIndex = 0,
        endIndex = len-1;

    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (numberToFind === arr[middleIndex]) {
            index = middleIndex;
            endIndex = middleIndex-1;
        } else if (numberToFind > arr[middleIndex]) {
            startIndex = middleIndex + 1;
        } else if (numberToFind < arr[middleIndex]) {
            endIndex = middleIndex -1;
        } 
    }
    
    return index;
}

console.log('binarySearch:');
console.log(binarySearch(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '99']));
console.log(binarySearch(['10', '1', '2', '4', '16', '16', '31', '64', '64', '64', '99', '16']));
console.log(binarySearch(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '3']));
