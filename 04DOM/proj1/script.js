var number = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval( () => {
    if(count < 1000){
        count++;
        number.innerText = count;
    }
}, 1)

setTimeout(() => {
    followers.innerText = "Followers in Insta ";
}, 4000)
