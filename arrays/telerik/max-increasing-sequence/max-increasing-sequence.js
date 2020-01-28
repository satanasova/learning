function maxIncrSeq(args) {
    const [len, ...arr] = args.map(Number);
    let maxLen = 1,
        currLen = 1;

    for (let i = 0; i < len - 1; i++) {
            if(arr[i+1] > arr[i]){
                currLen++
            } else currLen = 1;
            if (currLen > maxLen) {
                maxLen = currLen;
            }
    } 
    
    return maxLen > 1 ? maxLen : 0;
}

console.log(maxIncrSeq(['8', '7', '2', '5', '3', '4', '5', '6', '7']));
console.log(maxIncrSeq(['8', '7', '6', '5', '4', '3', '2', '1', '0']));