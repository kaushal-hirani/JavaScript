var User = {
    name: "Kaushal",
    getUserName: function(){
        console.log(`User name is : ${this.name}`);
    }
};

var Kaushal = Object.create(User);

console.log(Kaushal);
Kaushal.getUserName();