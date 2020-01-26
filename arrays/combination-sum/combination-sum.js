// Description
// Write a program that finds in given array of integers a sequence of given sum S (if present).

// Sample tests
// array	              S	     result
// 4, 3, 1, 4, 2, 5, 8	  11	 4, 2, 5

// function binaryCombos(n){
//     var result = [];
//     for(y=0; y<Math.pow(2,n); y++){
//         var combo = [];
//         for(x=0; x<=n; x++){
//             //shift bit and and it with 1
//             if((y >> x) & 1)
//                 combo.push(1);
//              else 
//                 combo.push(0);
//         }
//         result.push(combo);
//     }
//     return result;
// }

// //Usage
// combos = binaryCombos(3);

// for(x=0; x<combos.length; x++){
//     console.log(combos[x].join(','));
// }

// binaryCombos(4);
// console.log(Math.pow(2,4));

function binaryCombo(arr, S) {
    const binaryLength = Math.pow(2, arr.length),
        combos = [];
    // console.log(binaryLength);
    let sum = 0;
    for (let i = 0; i < binaryLength; i++) {
        let singleCombo = [];
        let binaryStr = i.toString(2).padStart(arr.length, '0');
        // console.log(binaryStr);
        for (let j = 0; j < binaryStr.length; j++) {
            if(binaryStr[j] === '1'){
                // console.log(args[j]);
                singleCombo.push(arr[j]);
            } 
            
        }
        combos.push(singleCombo);
    }

    console.log(combos);
    for (let combo of combos){
        sum = combo.reduce((a, b) => (a + b), 0);
        if(sum === S){
            console.log(combo);
        }
    }
}

binaryCombo([13, 6, 16, 28, 34, 66, 3,2,7], 11);
