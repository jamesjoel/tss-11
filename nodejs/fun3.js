function hello(a=5, b=5, c=1)
{
    let x = a*b;
    let y = x/c;
    return y;    
}

let y = hello();
console.log(y);
