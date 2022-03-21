const randomNumber = Math.random() * 100;
var temperature = Math.round(randomNumber)

console.log(temperature);

if (temperature < 20) {
    console.log("It is cold outside.")
}

if (temperature < 30) {
    console.log("It is moderate outside.");
} else {
    console.log("It's too hot to handle.");
}