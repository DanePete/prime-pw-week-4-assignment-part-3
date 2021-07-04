console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
let foundItem;
const maxItems = 5;
items = ['coffee','bacon','eggs','toast','orange juice', 'watermelon', '123', '12312'];

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
 * Returns true otherwise (equal or maore than maxItems)
 */
function isFull() {
  if(basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
}

/**
 * Add Item
 * adds an item to the basket array
 */
 function addItem(item) {
   console.log(isFull());
  if(isFull() == false) {
    basket.push(item);
    return true;
  } else {
    return false;
  }
}

/**
  * Remove Item
  * Take an input parameter for a string item
  * Use Array.indexOf to find the index of the first matching item in the basket.
  * Use Array.splice to remove the first matching item from the basket.
  * Return the item removed or null if the item was not found
 */
function removeItem(item) {
  console.log(basket.indexOf(item));
  if(basket.indexOf(item) != -1) {
    foundItem = basket.splice(0,1);
  } 
  return foundItem;
}

// Adding an item to the basket
// console.log(`Basket is ${basket}`);

 /**
  * Solution 1 - Adding individually
  */
console.log('Adding steak (expect true)', addItem('steak'));
console.log('Adding potatoes (expect true)', addItem('potatoes'));
console.log('Adding salad (expect true)', addItem('salad'));
console.log('Adding ipa (expect true)', addItem('ipa'));
console.log('Adding wine (expect true)', addItem('wine'));

/**
 * Solution 2 - Adding via an array calling the function in a loop
 */

for (let i of items) {
  console.log('Adding coffee (expect true)', addItem(i));
}

console.log(`Basket is now ${basket}`);

// Listing the Items inside the basket
listItems(basket);

// Removing single item
console.log(removeItem('steak'));

// Emptying the basket
empty();
console.log(basket);

// Checking is Full
console.log(isFull());