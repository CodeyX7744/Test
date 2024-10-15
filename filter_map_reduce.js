let array = [1,2,3,4,5,6,7,8,9];
let newArr = array.filter(arr => arr%2===0); //[2, 4, 6, 8]

let mapArr = newArr.map(arr => arr*3); // [6, 12, 18, 24]

let reduceArr = mapArr.reduce((acc, curr) => {   // 60
    acc += curr;
    return acc;
}, 0);

let sum = array.filter(arr => arr%2===0).map(arr => arr*3).reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0);                   // 60