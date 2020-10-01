/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/
// YOUR CODE HERE
const redundantArray = [1, 1, 2, 3, 3, 4];
let NewArray = 0;

let index = 0;
while (index < redundantArray.length) {
  let NewArray = NewArray + redundantArray[index];
  // if () {
  index = index + 1;
}

console.log(NewArray);
console.log(redundantArray);
