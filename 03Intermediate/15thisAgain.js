console.log(this);

var user = {
    firstName: "Kaushal",
    courseCount: 4,
    getCourseCount : function () {
        console.log("Line 7",this);
        function sayHello(){
            console.log("Hello");
            console.log("Line 10",this);
        }
        sayHello();
    },
};

user.getCourseCount();