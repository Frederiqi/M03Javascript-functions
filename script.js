/* 
makeDutchSandwich
Get a slice of bread
Put butter onto the slice of bread
Add Dutch cheese
Put a slice of bread on top
*/

function makeDutchSandwich() {
    console.log('Get a slice of bread');
    console.log('Put butter onto the slice of bread');
    console.log('Add Dutch cheese');
    console.log('Put a slice of bread on top');
}

makeDutchSandwich()

function makeSandwich(topping) {
    console.log('There you go, a sandwich with ' + topping);
}

makeSandwich('Dutch cheese')

function calculateDiscountedPrice(totalAmount, discount) {
    console.log('The discounted price is: ' + (Math.round(totalAmount - discount)) + ' euro');
}

calculateDiscountedPrice((100.45), (25))

function calculateDiscountedPriceIf(totalAmount, discount) {
    if (totalAmount > 25) {
        console.log('Congratulations, you received a discount! The discounted price is: ' + (Math.round(totalAmount - (totalAmount * discount))) + ' euro');
    } else {
        console.log('Unfortunately you did not get a discount, you have to pay: ' + (totalAmount) + ' euro');
    }
}
calculateDiscountedPriceIf((19.25), (0.25))
calculateDiscountedPriceIf((50.25), (0.25))