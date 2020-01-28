function maxEqualSeq(args) {
    const [len, ...arr] = args;
    let maxLen = 1,
        currLen = 1;

    for (let i = 0; i < len-1; i++) {
            // console.log(arr[i+1] + '-' + arr[i]);
            if (arr[i+1] === arr[i]) {
                currLen++
            } else currLen = 1;
            // console.log(currLength);
            if (currLen > maxLen) {
                maxLen = currLen;
            }
    } 
    return maxLength>1? maxLength : 0;
}

console.log(maxEqualSeq(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']));
console.log(maxEqualSeq(['10', '2', '1', '4', '2', '3', '4', '2', '0', '2', '1']));