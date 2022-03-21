var user = {
    firstName : "Kaushal",
    lastName : "Hirani",
    role : "Admin",
    loginCount : 32,
    facebookLoggedIn : "yes"
}

// console.log(user.firstName);
// console.log(user["lastName"]);

user.loginCount = 45;
// console.log(user);

var iPhone13 = {
    rom : "32GB",
    ram : "4GB",
    display : 6.5,
    yearReleased : 2022,
    camera : "12 MP",
    processor : "A13",
    isIt5g : true
}

console.log("Is it 5g Phone? " + iPhone13["isIt5g"]);
console.log("Which camera is used? " + iPhone13.camera);

console.table(iPhone13);