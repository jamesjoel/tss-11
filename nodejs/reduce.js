let data = [4, 8, 15, 3, 16, 7];
let ans =data.reduce((x, y)=>{
    return x > y ? x : y;
})

console.log(ans)