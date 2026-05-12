const user = {  name : 'Shabd' , email : 'shabd@gmail.com' , age : 23  }
console.log(user)
console.log(user.email);
console.log(user['email']);

user['age'] = 30;
console.log(user)

console.log(Object.keys(user));
console.log(Object.values(user));

const smartPhone ={ brand:'Apple' , model: 'Iphone 17' , price: 150000 , colors:[ 'gray', 'cosmic orange' , 'white'] }
console.log(smartPhone.colors[1]);
smartPhone.colors.push('black');
console.log(smartPhone);
smartPhone.colors[1]='yellow';
smartPhone.price = 200000
console.log(smartPhone);



const smartPhoneList = [
    {
        brand : 'Apple',
        model : 'Iphone 7',
        price : '130000',
        colors : ['blue' , 'black' , 'orange']
    } ,
    {
        brand : 'Oppo',
        model : 'Reno 6',
        price : '76000',
        colors : ['green' , 'red' , 'black']
    } ,
    {
        brand : 'Vivo',
        model : 'v9',
        price : '35000',
        colors : ['pink' , 'violet' , 'skin']
    } ,
    {
        brand : 'Samsung',
        model : 'S25 Ultra',
        price : '145000',
        colors : ['pink' , 'violet' , 'skin']
    } ,
    {
        brand : 'Motorola',
        model : 'g96',
        price : '18000',
        colors : ['pink' , 'violet']
    },
    {
        brand : 'Samsung',
        model : 'J7',
        price : '23000',
        colors : ['pink' , 'violet']
    }
]
console.log(smartPhoneList[1].price);
console.log(smartPhoneList[1].colors[0]);


//make an array of only brands
console.log('-----Maps-----');
const brandArr = smartPhoneList.map((n) => {return n.brand});
console.log(brandArr);

//Filter phone with prices>50000
console.log('-----Filter-----');
const BudgetPhonesArr = smartPhoneList.filter((n) => {return n.price<50000});
console.log(BudgetPhonesArr);
//Filter only Samsung Phones
const SamsungPhonesArr = smartPhoneList.filter((n) => {return n.brand==='Samsung'});
console.log(SamsungPhonesArr);

console.log('-------includes()-------');
//Check for substring
const keyword = 'sam';
const matching = smartPhoneList.filter(n => { 
    return n.brand.toLowerCase().includes(keyword.toLowerCase())  })
    console.log(matching);


// Filter all phones with black color
const blackPhones = smartPhoneList.filter(phones => {
    return phones.colors.includes('black')
})
console.log(blackPhones);



    












