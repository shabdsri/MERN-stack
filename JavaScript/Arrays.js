const arr = ['hello' , 656 , false , null];
console.log(Array.isArray(arr));
const movies = [ 'Dhurandhar' , 'Sikandar' , 'Jaani Dushman' , 'Bhaijaan' , 'GameOfThrones'];
console.log(movies.length);
console.log(movies[2]);
console.log(movies[4]);
console.log(movies.at(-3));
console.log(movies.indexOf('Bhaijaan'));
console.log(movies.at(1));
movies[2] = 'Real Steel';
console.log(movies);

// SLICING
console.log(movies.slice(1,4));
console.log(movies.slice(-3 , -1));
console.log(movies.slice(-2));
console.log(movies.slice(3,20));

// Functions
console.log(movies);
movies.push('3 Idiots');
console.log(movies);
movies.unshift('Batman');  // Adds element to start
console.log(movies);

// Removing Elements
movies.pop();  // Remove element from end
console.log(movies);
movies.shift() // Remove element from start
console.log(movies);
//movies.splice(3,2)   //Removes 2 elements from Index3  splice(startIndex , no of elements)
console.log(movies);
//movies.splice(3,2 , 'Superman', 'Flash'); //Replaces the elements after removing
console.log(movies);
movies.splice(1,0 , 'Superman', 'Flash'); //Add at 1 index without removing anything
console.log(movies);






 






    
