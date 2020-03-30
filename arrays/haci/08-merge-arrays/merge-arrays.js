function mergeArrays(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))];
}

console.log(mergeArrays(['mili', 'pufi', 3, 4, 'malko pi', 'abchi'], ['mili', 'pufi', 'bichi', 'richi', 3, 'tigyr']));

// haci1:
// хахах, много мъдро. аз не се сетих за Set. ай пробвай и без Set
