//How do you sort an array of integers in ascending order?

let arr = [5, 2, 7, 3, 1, 3];

for(let j=0; j<arr.length; j++)
{
    for(let i = 0; i<arr.length; i++)
    {
        if(arr[i]<arr[i+1])
        {
            let temp = arr[i]; 
            arr[i] = arr[i+1]; 
            arr[i+1] = temp; 
        }
        
    }
}
console.log(arr);


