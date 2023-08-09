for(let b = 6; b >= 1; b--)
{
    var ans = "";
    for(let a = 1; a <= b; a++)
    {
        if(b % 2 == 0){
            ans += "5";
        }else{
            ans +="#";
        }
    }
    console.log(ans);
}


