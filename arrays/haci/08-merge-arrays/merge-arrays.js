function mergeArrays(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))];
}

console.log(mergeArrays(['mili', 'pufi', 3, 4, 'malko pi', 'abchi'], ['mili', 'pufi', 'bichi', 'richi', 3, 'tigyr']));