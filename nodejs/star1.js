/*

*****
*****
*****
*****
*****

*/

let z = 15;
for(let a = 1; a <= 5; a++)
{
    var temp = "";
    for(let x = 1; x <= a; x++)
    {
        temp += z;
        z--;
    }
    console.log(temp);
}

