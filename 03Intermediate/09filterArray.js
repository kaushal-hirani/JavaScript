var testArray = [1, 5, 6, 7, 3, 8, 9];

// console.log(testArray.fill("h", 2, 5));

// To empty the value of an array
// console.log(testArray.fill("Empty"));

const myNumber = [23, 26, 98, 65, 87, 90];

const result = myNumber.filter( (num) => num < 65);

// console.log(result);

var users = ["Kaushal", "Ravi", "Kanaiya", "Pratik"];

// console.log(users.slice(1, 3));

// remove index - 1 and count upto middle argument and then removes them and add "Hi"
users.splice(1, 2, "Hi");
console.log(users);