var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = false;

// if (isLoggedIn) {
//     console.log("Logged In Success");
//     if (isEmailVerified) {
//         console.log("Email verified.");
//         if (cardInfo) {
//             console.log("You can make a purchase");
//         }
//     }
// }

if (isLoggedIn && isEmailVerified && cardInfo ) {
    console.log("Allow user to make purchase.");
} else {
    console.log("You are not allowed to make purchase because :");
    if (!isLoggedIn) {
        console.log("Please logged In First.")
    }
    if (!isEmailVerified) {
        console.log("Email not verified");
    }
    if (!cardInfo) {
        console.log("Card Information Is not present.");
    }
}