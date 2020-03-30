// Fisher–Yates Shuffle

function shuffleElements(arr) {
    let curIdx = arr.length,
        tmp,
        randomIdx;

    while (curIdx) {
        randomIdx = Math.floor(Math.random() * (curIdx-1));
        curIdx -= 1;
        tmp = arr[curIdx];
        arr[curIdx] = arr[randomIdx];
        arr[randomIdx] = tmp;
    }

    return arr;
}

console.log(shuffleElements([1,2,3,4,5,6,7,8,9,10]));

// haci1:
// тва май не си го писала ти? ай ще я напишем двамата тая задача