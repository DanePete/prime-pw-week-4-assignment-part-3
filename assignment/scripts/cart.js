console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
  basket.push(item);
  return true;
}

function listItems(array) {
  for (let i of array) {
    console.log(i);
  }
}

function empty(array) {
  basket = [];
  return 'basket now empty';
}

/**
 * Add Item
 * adds an item to the basket array
 */
console.log(`Basket is ${basket}`);
console.log('Adding toast (expect true)', addItem('toast'));
console.log(`Basket is now ${basket}`);

/**
 * List Item
 * Lists out the items in the basket array
 */
console.log(listItems(basket));

/**
 * Empty Basket
 * Sets the basket array back to empty
 */
console.log(empty(basket));
console.log(basket);

