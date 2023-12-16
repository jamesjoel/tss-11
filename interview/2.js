//How do you determine if a string is a palindrome?
// naman
// nitin
// abcdcba


let str = "abcdcba";
let arr = str.split("");
let newstr = "";
for(let i = arr.length-1; i >=0; i--)
{
    newstr += arr[i];
}

if(str==newstr)
{
    console.log("YES")
}
else{
    console.log("NO");
}