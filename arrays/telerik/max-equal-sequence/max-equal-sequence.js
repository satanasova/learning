function maxEqualSeq(args) {
    const [len, ...arr] = args.map(Number);
    let maxLen = 1,
        currLen = 1;

    for (let i = 0; i < len-1; i++) {
            if (arr[i+1] === arr[i]) {
                currLen++
            } else currLen = 1;
            if (currLen > maxLen) {
                maxLen = currLen;
            }
    } 
    
    return maxLen > 1 ? maxLen : 0;
}

console.log(maxEqualSeq(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']));
console.log(maxEqualSeq(['10', '2', '1', '4', '2', '3', '4', '2', '0', '2', '1']));