console.log("--------map-------");

// Wap to create an array containing square of numbers and store it in another array
const nums = [4,8,9,2,5,6,7]
sqrNums = nums.map((n) => { return n**2})
console.log(sqrNums);

// Wap to create an array containing numbers multiplied by 10 and store it in another array
NumsWithTen = nums.map((n) => { return n*10})
console.log(NumsWithTen);

console.log("--------Filter-------");

// Wap to filter only even numbers and store it in another array
 evenNums = nums.filter( (n) => { return n%2===0 });
 console.log(evenNums);
 
//  Wap to filter only those prices which are between 400 and 700
 prices= [340,550,670,1100,390]
 arr= prices.filter((n) =>{ return n>=400 && n<=700})
 console.log(arr);
 
//  WAP to print after removing dollar sign and only integer values
 rawPrices = ['$450.23' , '$4.99' , '$12.45', '$33.98' ]
 cleanPrice = rawPrices.map((p) => {return parseInt(p.slice(1))});
 console.log(cleanPrice);
 
 







