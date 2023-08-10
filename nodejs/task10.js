let arr = [4, 12, 8, 15, 2, 4, 8, 6, 15, 10, 4];

// let data = arr.map((v, n)=>{
//     if(arr.indexOf(v) == n){
//         return v;
//     }
// })


let data = arr.filter((v, n)=> arr.indexOf(v) == n);


console.log(data);