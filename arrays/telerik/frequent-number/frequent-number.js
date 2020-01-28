function findMostFreq(args) {
    const [len,...arr] = args.map(Number);
    let repNumber = arr[0],
        repTimes = 0,
        maxRepTimes = 1;
        
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (arr[i] == arr[j]) {
                repTimes++;
            }
            if (maxRepTimes < repTimes) {
                maxRepTimes = repTimes;
                repNumber = arr[i];
            }
        }
        repTimes = 0; 
    }

    return `${repNumber} (${maxRepTimes} times)`;
}

console.log(findMostFreq(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']));