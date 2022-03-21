var name = "Kaushal";

console.log("Line number 3", name);

function sayName() {
    // var name = "Mr. K";
    console.log("Line number 7", name);
    sayNameTwo();

    function sayNameTwo() {
        // var name = "Mr. KH";
        console.log("Line number 12", name);
    }
}

sayName();
