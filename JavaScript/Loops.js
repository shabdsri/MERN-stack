
for(let i=0; i<10; i++)
{
    console.log(i);
    
}
console.log();


arr = "shabdLALA";
for(let p of arr)
{
    console.log(p);
    
}
console.log();


let a=10;
while(a<=20)
{
    console.log(a);
    a++;
    
} console.log();

// WAP to print all numbers divisible by 7 and 11 in range of 30 to 130
for(let i=30; i<=130; i++)
{
    if(i%7==0 && i%11==0)
     console.log(i);
     
}
console.log();

// WAP to check if a number is prime or not
let n=17; 
let cnt=0;
for(let i=2; i<n/2;i++)
{
    if(n%i==0){
      cnt++;
    }
}
if(cnt>0)
    console.log("not prime");
else
    console.log("prime");
