
// function removeFromArray(arr,num1, num2) {
//     let newArr = [];
//     let arr1 = [];
//     let arr2 = [];
//     let numRemoved = [];
//     numRemoved.push(num1,num2);

//     for (let i=0; i<numRemoved.length; i++) {
//         for (let j=0; j<arr.length; j++) {
//             if (arr[j] === numRemoved[i]) {
//                 arr1 = arr.slice(0,j);
//                 // arr2 = arr.slice(j+1);
//                 newArr += arr1;
//             } else 
//         }
//     }
   
//     return newArr;
// }




// let newArr = [];

// function removeFromArray(arr,num1, num2) {
//     for (let i=0; i<arr.length; i++) {
//         if(arr[i] !== num1 && arr[i]!== num2) {
//             newArr.push(arr[i]);
//         }

//     }
//     return newArr;
// }

// console.log(removeFromArray([1, 2, 3, 4], 3, 2))



let newArr = [];

function removeFromArray(arr, ...args) {
    
   console.log(arr)
   console.log(args)

  newArr = arr.filter(item => !args.includes(item));

return newArr;

}

console.log(removeFromArray([1, 2, 3, 4],1,4,"tr",5,9,"yes"));