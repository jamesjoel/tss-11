var count=1;
for(var a = 1; a <= 5; a++)
{
    var temp = "";
    for(var b = 1; b <= a; b++)
    {
        if(count % 2 == 0){
            temp +=2;
        }
        else{
            temp +=1;
        }
        count++;
    }
    count = 1;
    console.log(temp)
}

// for(var a = 1; a <= 10; a++)
// {
//     if(a % 2== 0){
//         console.log(2);
//     }else{
        
//         console.log(1);
//     }
// }