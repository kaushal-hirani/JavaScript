var isEven =  element => {
    // if (element % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return element % 2 === 0;
}

// console.log(isEven(3));

// var result = [2, 5, 6, 8].every(isEven);
// console.log(result);

var result = [2, 4, 6, 8].every( (e) => (e % 2 == 0));
console.log(result);



