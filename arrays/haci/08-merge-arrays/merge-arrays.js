function mergeArrays(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))];
}

console.log(mergeArrays(['mili', 'pufi', 3, 4, 'malko pi', 'abchi'], ['mili', 'pufi', 'bichi', 'richi', 3, 'tigyr']));

// haci1:
// хахах, много мъдро. аз не се сетих за Set. ай пробвай и без Set

// е то ще е същото като remove-duplicates, само че първо ще ги конкатна ?

function mergeArrays2(arr1, arr2) {
    const arr = arr1.concat(arr2);
    return arr.filter((element, index) => arr.indexOf(element) === index);
}

console.log(mergeArrays2(['mili', 'pufi', 3, 4, 'malko pi', 'abchi'], ['mili', 'pufi', 'bichi', 'richi', 3, 'tigyr']));