function moveElement(arr, idx, steps) {
    let theEl,
        len = arr.length;

    for (let i = 0; i < len; i++) {
        if (i === idx){
            theEl = arr.splice(idx, 1);
            // while (idx + steps > len-1) {
            //     steps -= len;
            //     // console.log(steps);
            // }
            arr.splice(idx + (steps % len), 0, ...theEl)
        }
    }
    return arr;
}

console.log(moveElement([0,1,2,3,4,5,6,7], 2, 13));

// haci1:
// супер решение, само се замисли как се казва математическата операция когато имаш неточно деление на 2 числа и те интересува колко остава накрая, защото ти това правиш с тоя whila