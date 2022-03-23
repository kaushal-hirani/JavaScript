// function init(){
//     var firstName;
//     firstName = "Kaushal";
//     function getFirstname(){
//        console.log(firstName);
//     };
//     return getFirstname;
// };

// let fname = init();
// fname();

// function addition (a, b, c){
//     return a+b+c;
// }

function addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

let sum = addition(5)(5)(5); // Curring
console.log(sum);

userObj = {
    name: "Kaushal",
    age: 23
};

function getInfo(obj){
    return function(getInfo){
        return obj[getInfo];
    };
};

var user = getInfo(userObj);
console.log(user("name"));