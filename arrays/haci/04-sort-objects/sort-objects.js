function sortObjects(arr, propName) {
   return arr.sort((a,b) => (a[propName] > b[propName]) ? 1 : (a[propName] < b[propName]) ? -1 : 0);
    //   if (a[propName] > b[propName])  return 1; 
    //   if (b[propName] > a[propName])  return -1; 
    //   return 0
}

let objects = 
    [{name: 'Tiger',age: 5,gender: 'male'},
    {name: 'Pufi',age: 10,gender: 'female'},
    {name: 'Mili',age: 2,gender: 'female'}];

console.log(sortObjects(objects, 'name'));
console.log(sortObjects(objects, 'age'));
console.log(sortObjects(objects, 'gender'));