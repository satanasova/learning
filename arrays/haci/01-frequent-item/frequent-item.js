function findMostFreq(arr) {
    let repItem,
        usedItems = [],
        maxRepTimes = 1;

    for (let i = 0; i < arr.length; i++) {
        if(usedItems.includes(arr[i])) {
            continue;
        }
        usedItems.push(arr[i]);
        let repTimes = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                repTimes++;
                // usedItems.push(arr[i]); // haci2: защо го пушваш тук в usedItems. Теб не те интересува има ли равни, няма ли. Ако си го проверила веднъж повече няма нужда да го проверяваш. дирекнто преди repTimes=1 го маркираш като изпозлвано и почваш да му търсиш еднакви
                // console.log(arr[i], repTimes);
            }
            if (maxRepTimes < repTimes) {
                maxRepTimes = repTimes;
                repItem = arr[i];
            }
        }
    }

    return repItem ? repItem : 'None'; //haci1: гуд
}

console.log(findMostFreq(['pufi', 'mili', 'abchi', 'mili', 'mili', 'mili', 'mili', 'mili', 4, 4, 4, 'mili', 4, 4]));
console.log(findMostFreq(['mili', 'pufi', 'malko pi', 'abchi', 'tigyr', 'jerry', 'bichi', 'richi']));

// haci1:
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

// pecka1:
// това сиг не е най-умното, ама от една пецка толкос :Д

// haci2:
// само 1 последно ти е останало и е топ

// pecka:
// оки