// How do you print a Fibonacci sequence using recursion?
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 32, 53, 

let a = 0;
let b = 1;
let sum = 0;
console.log(a);
console.log(b);
for(let i = 1; i <= 10; i++)
{
    sum = a+b;
    a = b;
    b = sum;
    console.log(sum);
}