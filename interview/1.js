/*
How do you reverse a string?

*/
let str = "Rohit Verma";
let arr = str.split(""); // [R, o, h, i, t, , V, e, r, m, a]
let x = "";
for(let i = arr.length-1; i >= 0; i--)
{
    // console.log(arr[i])
    x += arr[i];
}

console.log(x);


