var user = {
    firstName : "Kaushal",
    lastName : "Hirani",
    role : "Admin",
    loginCount : 32,
    facebookLoggedIn : true,
    courseList : [],
    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return this.courseList.length;
    },
    info: function(){
        console.log("First Name is :" + this.firstName);
        console.log("Last Name is :" + this.lastName);
        console.log("role is :" + this.role);
        console.log("loginCount :" + this.loginCount);
        console.log("Is he logged in facebook? " + this.facebookLoggedIn);
        console.log("Course List :", this.courseList);
        console.log("how many courses did he subscribed :" + this.getCourseCount());
    }
};

// console.log(user.getCourseCount());
user.buyCourse("React");
user.buyCourse("Angular");
// console.log(user.getCourseCount());
// console.log(user.courseList);
user.info();


