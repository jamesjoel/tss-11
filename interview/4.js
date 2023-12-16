//How do you find the count for the occurrence of a particular character in a string?
let str = "avni verma rohit joshi vijay jha";
let arr = str.split("");

let char = "i";
let count = 0;
for(let i = 0; i < arr.length; i++)
{
    if(arr[i]==char)
    {
        count++;
    }
}

console.log(count);