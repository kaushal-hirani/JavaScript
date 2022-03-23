var User = function (firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`Course Count is : ${this.courseCount}`);
    };
};

User.prototype.getFirstname = function(){
    console.log(`First name of user is : ${this.firstName}`);
}


var kaushal = new User("Kaushal", 2);
kaushal.getCourseCount();

if (kaushal.hasOwnProperty("firstName")) {
    kaushal.getFirstname();
}

var neha = new User("Neha", 5);
neha.getCourseCount();
if (neha.hasOwnProperty("firstName")) {
    neha.getFirstname();
}

// console.log(kaushal);
// console.log(neha);
