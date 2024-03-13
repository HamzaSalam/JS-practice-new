// Given an integer array arr and a mapping function fn, return a new array with a 
// transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// let arr = [1,2,3]
// console.log(arr)
// let mapp = arr.map((num)=>{
//     num = num + 1
//     return num
// })

// console.log(mapp)


// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) 
// evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

let array = [10,5,20,30]
let i;

let filter = array.map((value)=>{
    if(value > 10){
        return value
    }
    else{
        
    }
    
})

console.log(filter)