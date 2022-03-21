var sellingPrice = 199;
var listingPrice = 799;
var discountPrice = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount Price is " + discountPrice)

displayDiscountPercent = Math.round(discountPrice) 
console.log(displayDiscountPercent + "% OFF")

// Use of typeof

console.log(typeof discountPrice)