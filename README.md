# Hash Map
Hash map implemented with JavaScript, made for a TOP lesson.

## Features
- `hash(key)`: takes a key and produces a hash code with it. 
- `set(key, value)`: takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten.
- `get(key)`: takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
- `has(key)`: takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
- `remove(key)`: takes a key as an argument. If the given key is in the hash map, it removes the entry with that key and return true, otherwise it returns false.
- `length()`: returns the number of stored keys in the hash map.
- `clear()`: removes all entries in the hash map.
- `keys()`: returns an array containing all the keys inside the hash map.
- `values()`: returns an array containing all the values.
- `entries()`: returns an array that contains each key, value pair. Example: `[[firstKey, firstValue], [secondKey, secondValue]]`.
- `resize()`: helper method that gets triggered automatically by `set` when the load factor of the map surpasses it's set treshold, so it doubles it's capacity.