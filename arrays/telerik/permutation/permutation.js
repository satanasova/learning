// НЕ МОГА

function solve(N) {
    const permArr = [],
        usedChars = [],
        arr = [];
        
    for (let i = 1; i <= N; i++) {
        arr.push(i);
    }

    function permute(input) {
        // преписан и неразбран алгоритъм 
        let ch;
        for (let i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);

            if (input.length == 0) {
                permArr.push(usedChars.slice());
            }

            permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }

        return permArr
    }

    return permute(arr)
}


console.log(solve(3));