const nums = [4,8,9,2,5,6,7]
for(let i=0 ; i<nums.length ; i++)
{
    console.log(nums[i]);
    
}
console.log("--------for of loop---------");


for(let n of nums)
{
    console.log(n);
    
}

console.log("--------forEach() function---------");


nums.forEach((a , b , c) =>{
    console.log(a,b,c );
     
})