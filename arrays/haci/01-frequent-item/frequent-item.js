function findMostFreq(arr) {
    let repItem,
        usedItems = [],
        maxRepTimes = 1;

    for (let i = 0; i < arr.length; i++) {
        if(usedItems.includes(arr[i])) {
            continue;
        }
        let repTimes = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                repTimes++;
                usedItems.push(arr[i]);
                console.log(arr[i], repTimes);
            }
            if (maxRepTimes < repTimes) {
                maxRepTimes = repTimes;
                repItem = arr[i];
            }
        }
    }

    return repItem ? repItem : 'None'; //гуд
}

console.log(findMostFreq(['pufi', 'mili', 'abchi', 'mili', 'mili', 'mili', 'mili', 'mili', 4, 4, 4, 'mili', 4, 4]));
console.log(findMostFreq(['mili', 'pufi', 'malko pi', 'abchi', 'tigyr', 'jerry', 'bichi', 'richi']));

// haci:
// правилно, но може да се оптимизира. ако имаш примерно X, Y, Y, X, X, X, X, X
// и ти въртиш по всеки елемент и броиш
// X - Y, Y, X, X, X, X, X  - item: X repTimes: 5
// Y - Y, X, X, X, X, X     - item: Y repTimes: 1
// Y - X, X, X, X, X        - item: Y repTimes: 0
// X - X, X, X, X           - item: X repTimes: 4
// X - X, X, X              - item: X repTimes: 3
// X - X, X                 - item: X repTimes: 2
// X - X                    - item: X repTimes: 1
// X -                      - item: X repTimes: 0

//тук X го смяташ 6 пъти, а още първия път го смяташ както трябва и намираш макс повторенията, от следващите 5 пъти няма смисъл

// pecka:
// това сиг не е най-умното, ама от една пецка толкос :Д