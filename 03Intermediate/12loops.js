// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

const states = [
    "Rajsthan",
    "Delhi",
    1947,
    "Gujarat", 
    "Punjab"
];

// for (let index = 0; index < states.length; index++) {
//     const element = states[index];
//     if(typeof element != "string") continue;
//     console.log(element);
// }
let i = 0;
// while (i < states.length) {
//     console.log(states[i]);
//     i++;
// }
do {
    console.log(states[i]);
    i++;
}
while (i < states.length);