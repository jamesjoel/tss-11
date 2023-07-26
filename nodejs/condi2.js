let f = 25000;
let m = 31000;
let a = 40000;

let x = f*5/100; // fridge gst
let y = m*5/100; // mobile gst
let z = a*8/100; // ac gst

let total = f+x+m+y+a+z;

if(total <= 120000){
    console.log("YES")
}else{
    console.log("NO")
}
