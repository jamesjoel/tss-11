//How do you calculate the number of numerical digits in a string?
let str = "4SF41D52sd1fg54sdf5g12sg5sd4g521er";
let arr = str.split("");
// is Not A Number
let count = 0;
for(let i = 0; i < arr.length; i++)
{
    if(isNaN(arr[i])==false)
    {
        count++;
    }
}
console.log(count);''