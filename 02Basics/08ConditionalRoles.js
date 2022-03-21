// Create an application with following roles :
// admin - Full access 
// subadmin - access to create/delete course 
// testprep - access to create/delete test
// user - access to consume content

var user = "admin";

switch (user) {
    case "admin":
        console.log("You have full access");
        break;
    case "subadmin":
        console.log("access to create/delete course");
        break;
    case "testprep":
        console.log("access to create/delete test");
        break;
    case "user":
        console.log("access to consume content");
        break;
    default:
        console.log("Trial User");
        break;
}