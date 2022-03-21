// Show user a sign out button if he is already logged In
// Otherwise show him option to login/signup

var authenticated = true;

// if (authenticated) {
//     console.log("Show Signout Button");
// } else {
//     console.log("Show login Button");
// }

authenticated ? console.log("Show Signout Button") : console.log("Show login Button");