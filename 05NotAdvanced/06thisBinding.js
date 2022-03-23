const kaushal = {
    firstName: "Kaushal",
    lastName: "Hirani",
    role: "Admin",
    courseCount: 3,
    getInfo: function(){
        console.log(`
            firstname is ${this.firstName}.
            lastname is ${this.lastName}.
            Role is ${this.role}.
            Subscribed to ${this.courseCount}.
        `);
    },
};

const dj = {
    firstName: "Rock",
    lastName: "dj",
    role: "subadmin",
    courseCount: 6
};

// kaushal.getInfo();
// dj.getInfo();


// kaushal.getInfo.bind(dj)();
var djInfo = kaushal.getInfo.bind(dj);
djInfo();

kaushal.getInfo.call(dj);