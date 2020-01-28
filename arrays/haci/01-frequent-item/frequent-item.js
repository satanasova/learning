function findMostFreq(arr) {
    let repItem,
        repTimes = 0,
        maxRepTimes = 1;
        
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                repTimes++;
            }
            if (maxRepTimes < repTimes) {
                maxRepTimes = repTimes;
                repItem = arr[i];
            }
        }
        repTimes = 0; 
    }

    return repItem ? repItem : 'None';
}

console.log(findMostFreq(['pufi', 'malko pi', 'abchi', 'mili', 'mili', 'mili', 'mili', 'mili', 4, 4, 4, 4, 4, 4]));
console.log(findMostFreq(['mili', 'pufi', 'malko pi', 'abchi', 'tigyr', 'jerry', 'bichi', 'richi']));