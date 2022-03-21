const names = [
    "Youtube",
    "Google",
    "Facebook",
    "Netflix",
    "Amazon"
];

for (const n of names) {
    console.log(n);
}

const symbols = {
    yt: "Youtube",
    gl: "Google",
    fb: "Facebook",
    nx: "Netflix",
    az: "Amazon"
};

for (const n in symbols) {
    console.log(`Key is: ${n} & Value is : ${symbols[n]}`);
}