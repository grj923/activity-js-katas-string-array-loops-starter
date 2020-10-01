/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/

// YOUR CODE HERE
let MountainsHeight = [400, 1200, 5000, 200];
let TallestMountain = 0;
let index = 0;

while (index < MountainsHeight.length) {
  if (TallestMountain < MountainsHeight[index]) {
    TallestMountain = MountainsHeight[index];
  }
  console.log(MountainsHeight[index]);
  index = index + 1;
}
console.log("The Tallest Mountain is " + TallestMountain);
