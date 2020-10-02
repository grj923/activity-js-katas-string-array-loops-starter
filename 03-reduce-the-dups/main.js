/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/
// YOUR CODE HERE
const redundantArray = [1, 1, 2, 3, 3, 4];
let NewArray = [];

let index = 0;
while (index < redundantArray.length) {
  if (NewArray.includes(redundantArray[index]) === false) {
    NewArray.push(redundantArray[index]);
  }

  index = index + 1;
}

console.log("New Array " + NewArray);
console.log("Old Array " + redundantArray);
