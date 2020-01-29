function findLongestStreakOfEquals(arr) {
    let curLen,
        maxLen = 1,
        startElIdx,
        endElIdx,
        longestStreak;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i-1] === arr[i]) {
            curLen++
        } else curLen = 1;
        if (curLen > maxLen) {
            maxLen = curLen;
            endElIdx = i;
            startElIdx = endElIdx + 1 - maxLen;
        }
    }

    longestStreak = arr.slice(startElIdx, endElIdx+1);
    return maxLen > 1 ? 
        `longest streak is [${longestStreak.join(', ')}] starting from index ${startElIdx}` 
        : `there is no streak longer than 1`;
}

console.log(findLongestStreakOfEquals([1,  1, 'mili', 2, 'mili', 'mili', 3, 3, 'mili', 'mili', 'mili', 1, 2]));
console.log(findLongestStreakOfEquals([1, 'mili', 2, 'mili', 3, 'mili', 4, 'mili', 3, 'mili']));
