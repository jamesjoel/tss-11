//How do you calculate the number of vowels and consonants in a string?

let str = "ms avni joshi";
let arr = str.split("");

let c = 0;
let v = 0;
for(let i = 0; i<arr.length; i++)
{
    if(arr[i]==" "){
        continue;
    }
    if(arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i]=="o" || arr[i]=="u")
    {
        v++;
    }
    else{
        c++;
    }
}

console.log("V -- ",v);
console.log("C -- ",c);
