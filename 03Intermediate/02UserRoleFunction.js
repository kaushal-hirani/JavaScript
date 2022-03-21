// Define a function that can answer the role of user
// Create an application with following roles :
// admin - Full access 
// subadmin - access to create/delete course 
// testprep - access to create/delete test
// user - access to consume content
// other - trial user.

// Input : getUserRole(name, role)

function getUserRole(name, role) {
    
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            
        case "subadmin":
            return `${name} is subadmin with access to create/delete course`
            
        case "testprep":
            return `${name} is admin with access to create/delete test`
            
        case "user":
            return `${name} is admin with access to consume content`
                                        
        default:
            return `${name} is trial user.`
            
    }
}

console.log(getUserRole("kaushal", "user"));

var getRole = getUserRole("neha", "testprep");

console.log(getRole);