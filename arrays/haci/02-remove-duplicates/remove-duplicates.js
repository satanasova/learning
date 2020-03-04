function removeDuplicates_Set(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates_Set(['pufi', 'malko pi', 'abchi', 'mili', 'mili', 'mili', 'mili', 'mili', '4', '4', '4', '3', '4', '3']));


function removeDuplicates_Include(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDuplicates_Include(['pufi', 'malko pi', 'abchi', 'mili', 'mili', 'mili', 'mili', 'mili', '4', '4', '4', '3', '4', '3']));


// това не го измислих сама, но си го обясних :Д
function removeDuplicates_Filter(arr) {
    return arr.filter((element, index) => arr.indexOf(element) === index);
}

console.log(removeDuplicates_Filter(['pufi', 'malko pi', 'abchi', 'mili', 'mili', 'mili', 'mili', 'mili', '4', '4', '4', '3', '4', '3']));

// добре са, само ще трябва да ми обясниш и на мен какво си разбрала за последния вариант