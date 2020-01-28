// ако числото на досегашния мин е по-голямо от числото на сегашния индекс, сложи мин да е сегашния индекс :д

let selectionSort = (array) => {
    const [len, ...arr] = array.map(Number); 
    for (let i = 0; i < len; i++) {
        let minIdx = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            let tmp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = tmp;
        }
    }
    return arr.join('\n');
}

console.log(selectionSort(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']));
