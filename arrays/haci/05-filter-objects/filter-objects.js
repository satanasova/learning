function filterObjects(arr, propName, propValue) {
    return arr.filter(obj => obj[propName] === propValue);
}

let objects = 
    [{name: 'Tiger',age: 5,gender: 'male'},
    {name: 'Pufi',age: 10,gender: 'female'},
    {name: 'Mili',age: 2,gender: 'female'}];

console.log(filterObjects(objects, 'name', 'Mili'));
console.log(filterObjects(objects, 'age', 10));
console.log(filterObjects(objects, 'gender', 'male'));