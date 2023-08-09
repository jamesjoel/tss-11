let x = "06/28/2023";
let y = "03/07/2023";

let a = new Date(x);
let b = new Date(y);

let ans1 = Math.abs(a-b);

let ans2 = ans1/(1000*60*60*24);
console.log(ans2);