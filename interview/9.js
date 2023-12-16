// How do you find the average of numbers in a list (array)?
let arr = [4, 12, 6, 7, 11, 10];
let num = arr.length;
let sum = 0;
for(let i = 0; i < arr.length; i++)
{
    sum += arr[i];
}
console.log(sum/num);

/*
let arr = ["v", "i", "j", "a", "y"];

let a = "";
for(let i = 0; i < arr.length; i++)
{
    a += arr[i];
}
console.log(a);
*/
