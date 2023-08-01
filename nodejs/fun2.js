function hello(a=5, b=5, c=1)
{
    let x = a*b;
    let y = x/c;
    console.log(y);
}

hello();
hello(100);
hello(10,5);
hello(200,50, 10);