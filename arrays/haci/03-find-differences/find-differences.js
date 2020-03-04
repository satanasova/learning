function findDifferences(arr1, arr2) {
    const differences = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            differences.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            differences.push(arr2[i]);
        }
    }

    return differences;
}

console.log(findDifferences(['mili', 'pufi', 'malko pi', 'abchi', 4], ['mili', 'pufi', 'bichi', 3, 'richi', 'tigyr']));


function findDifferences_Filter(arr1, arr2) {
    // const uniqueArr1 = arr1.filter((el) => !arr2.includes(el)),
    //     uniqueArr2 = arr2.filter((el) => !arr1.includes(el));

    // return uniqueArr1.concat(uniqueArr2);

    // Or with chaining:
    return arr1.filter((el) => !arr2.includes(el))
        .concat(arr2.filter((el) => !arr1.includes(el)));
}

console.log(findDifferences_Filter(['mili', 'pufi', 'malko pi', 'abchi'], ['mili', 'pufi', 'bichi', 'richi', 'tigyr']));

// гуд
