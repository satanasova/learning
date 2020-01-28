function mergeArrays(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))];
}

console.log(mergeArrays(['mili', 'pufi', 'malko pi', 'abchi'], ['mili', 'pufi', 'bichi', 'richi', 'tigyr']));