function findDiffPairs(arr) {
    let pairs =[],
        output = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let singlePair = [];
            singlePair.push(arr[i], arr[j], arr[i] + arr[j]);
            pairs.push(singlePair);
        }
    }

    for (let i = 0; i < pairs.length; i++) {
        for (let j = i + 1; j < pairs.length; j++) {
            if (pairs[i][2] === pairs[j][2]) {
                output.push(`${pairs[i][0]} + ${pairs[i][1]} = ${pairs[j][0]} + ${pairs[j][1]}`)
            }
        }
    }

    return output.join('\n');
}

console.log(findDiffPairs([1, 2, 3, 4, 5]));



function findDiffPairs_2(arr) {
    let pairs =[],
        output = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            pairs.push(arr[i], arr[j], arr[i] + arr[j]);
        }
    }

    for (let i = 2; i < pairs.length; i += 3) {
        for (let j = i + 3; j < pairs.length; j += 3) {
            if (pairs[i] === pairs[j]) {
                output.push(`${pairs[i-2]} + ${pairs[i-1]} = ${pairs[j-2]} + ${pairs[j-1]}`)
            }
        }
    }

    return output.join('\n');
}

console.log('=============');
console.log(findDiffPairs_2([1, 2, 3, 4, 5]));


function findDiffPairs_3(arr) {
    let pairs = [],
        output = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let singlePair = {};
            singlePair.numbers = [arr[i], arr[j]];
            singlePair.sum = arr[i] + arr[j];
            pairs.push(singlePair);
        }
    }

    for (let i = 0; i < pairs.length; i++) {
        for (let j = i + 1; j < pairs.length; j++) {
            if (pairs[i].sum === pairs[j].sum) {
                output.push(`${pairs[i].numbers.join(' + ')} = ${pairs[j].numbers.join(' + ')}`)
            }
        }
    }

    // console.log(pairs);
    return output.join('\n');
}

console.log('=============');
console.log(findDiffPairs_3([1, 2, 3, 4, 5]));

// haci1:
// гуд, третия вариант е най-добре, само дето singlePair променливата навсякъде си я декларирала топ левел, а я ползваш само вътре във вътрешния фор и няма смисъл да е топ левел

// pecka1:
// oki doki

// haci2:
// ok