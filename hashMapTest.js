
const HashMap = require('./HashMap');
const test = new HashMap(12); 

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
console.log('Current size:', test.size); // Should be 8
console.log('Current bucket size:', test.bucketSize); // Should be 12

// Check the size and bucket size after adding entries
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('moon', 'silver');
console.log('Current size:', test.size); // Should be 13
console.log('Current bucket size:', test.bucketSize); // Should be 24 after resizing

// Checking other methods:
console.log("Get value of apple:", test.get('apple')); // Should output "red"
console.log("Apple exists in the map?", test.has('apple')); // Should be true
console.log("Removing apple...", test.remove('apple')); 
console.log("Checking if it exists afterwards...", test.has('apple')); // Should be false after removing it
console.log("Checking length of the map:", test.length()); // Should be 12
console.log("Keys array:", test.keys()); // Should output an array only containing the keys
console.log("Values array:", test.values()); // Should output an array only containing the values
console.log("Entries array:", JSON.stringify(test.entries())); // Should output an array with the entries in [key, value]
console.log("Clearing the map...", test.clear());
console.log("Map after clear:", test.length()); // Should be 0 after clear