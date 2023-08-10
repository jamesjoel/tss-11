let arr1 = [5, 8, 15, 6];
let arr2 = [14, 10, 7, 2];
let arr3 = [3, 0, 20];

let newarr = arr1.concat(arr2, arr3);

let ans = newarr.reduce((acc, value)=>{
    return acc < value ? acc : value;
})

console.log(ans);