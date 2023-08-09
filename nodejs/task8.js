let num = 100;
let sum = 0;

for(let i = 1; i <= num; i++)
{
    if(i % 2 != 0){
        sum = sum+i;
    }
}
console.log(sum);