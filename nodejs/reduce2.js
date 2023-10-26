let arr = [10, 15, 18, 20, 23, 7, 16, 3, 12, 11];

let ans =arr.reduce((acu, value)=>acu > value ? acu : value);

console.log(ans);