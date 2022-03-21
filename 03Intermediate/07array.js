var countries = ["India", "Pakistan", "Russia", "US", "UK"];

var states = new Array("Gujarat", "Rajsthan", "Mumbai", "Delhi");

// console.log(states);

// console.log(states[0])

// console.log(states.length);

// for (let index = 0; index < states.length; index++) {
//     const element = states[index];
//     console.log(element);
// }

// Change the value of an array 

states[0] = "Goa"

// console.log(states);

var users = ["Kaushal", "kaushalhirani007@gmail.com", 3, 34, true];

// console.log(user);

users.pop();
users.pop();
// console.log(user);
users.shift();
// console.log(user);
users.unshift("Hirani");
console.log(users);
// console.log(users.indexOf("Hiranu")); // Returns -1 if element is not in array.

for (const user of users) {
    console.log(user);
}


