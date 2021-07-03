console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;
items = ['coffee','bacon','eggs','toast'];

/**
 * Add Item
 * adds an item to the basket array
 */
function addItem(item) {
  console.log(isFull)
  basket.push(item);
  return true;
}

/**
 * List Item
 * Lists out the items in the basket array
 */
function listItems(array) {
  for (let i of array) {
    console.log(i);
  }
}

/**
 * Empty Basket
 * Sets the basket array back to empty
 */
function empty() {
  basket = []
  return true;
}

/**
 * Is Full
 * Returns false if basket contains less than max number of items
 * Returns true othwerise (equal or maore than maxItems)
 */
function isFull() {
  if(basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
}


// Adding an item to the basket
console.log(`Basket is ${basket}`);

 /**
  * Solution 1 - Adding individually
  */
console.log('Adding toast (expect true)', addItem('toast'));
console.log('Adding bacon (expect true)', addItem('bacon'));
console.log('Adding eggs (expect true)', addItem('eggs'));
console.log('Adding orange (expect true)', addItem('orange'));
console.log('Adding coffee (expect true)', addItem('coffee'));

/**
 * Solution 2 - Adding via an array calling the function in a loop
 */

for (let i of items) {
  console.log('Adding coffee (expect true)', addItem(i));
}

console.log(`Basket is now ${basket}`);

// Listing the Items inside the basket
listItems(basket);

// Emptying the basket
empty();
console.log(basket);

// Checking is Full
console.log(isFull());