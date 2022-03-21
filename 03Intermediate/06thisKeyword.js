// Part 1 of this keyword

console.log(this);

var game = "Cricket";

function sayGame(){
    var name = "Kaushal";
    console.log(this);
}
sayGame();