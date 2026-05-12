// Type 1
function addNums(a , b)
{
    c =a+b;
    console.log(c);
    
}
addNums(4 , 3);
console.log(c);

// Type 2
const getAvg = function(v1,v2,v3)
{
    avg = (v1+v2+v3)/3;
    console.log(avg);
    return avg;
    
}
getAvg(45,53,32);
const result = getAvg(45,53,32);
console.log(result);

// Type 3 Arrow Function
const factorial = (n) =>
{
    f=1;
    for(let i=1; i<=n; i++)
    {
        f=f*i;
    }
    return f;
}
console.log(factorial(7));

// Create a function to print sum of n natural nos
function SumOfNaturalNos(n)
{
    sum=0; 
    for(let i=1;i<=n;i++)
    {
        sum=sum+i;
    }
    return sum;

}
out=SumOfNaturalNos(4);
console.log(out);

console.log();


// Fibonacci series
function Fibo(n)
{   a=0;
    b=1;
    console.log(a);
    console.log(b);
    
    
    for(let i=1;i<n;i++)
    { 
        c=a+b;
        a=b;
        b=c; 
        console.log(c);
        


    }
    
}
Fibo(5)



