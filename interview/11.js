// find prime number Yes or No
// prime number serice

for(let j = 2; j <= 100; j++)
{
    
        let num = j;
        let check = true;
        for(let i = 2; i <= num/2; i++)
        {
            if(num % i == 0)
            {
                check = false;
                break;
            }
        }
        if(check==true)
            console.log(j)
        
}

// find the largest string in array ?
// find the largest number in array by reduce function ?
// aramstrong number 153 = 1q + 5q + 3q  3**3

