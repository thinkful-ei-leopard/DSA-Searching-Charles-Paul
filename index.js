// QUESTION 1

// A - 11, 6, 8
// B - 11, 15, 17

// QUESTION 2

// https://github.com/thinkful-ei-leopard/DSA-Searching-Charles-Paul-React-UI

// QUESTION 3

function findBook(library, dewey, title, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? library.length : end;

  if (start > end) {
    return 'book not found';
  }

  const index = Math.floor((start + end) / 2);
  const item = library[index];

  console.log(start, end);
  if (item == dewey) {
    return title;
  } else if (item < dewey) {
    return binarySearch(library, dewey, index + 1, end);
  } else if (item > dewey) {
    return binarySearch(library, dewey, start, index - 1);
  }
}

// QUESTION 4

// IN ORDER 

        35
     /     \
    25     89
   /  \    / \
  15  27  79  91
 / \          /
14 19        90           


//  POSTORDER 14, 19, 15, 27, 25, 79, 90, 91, 89, 35

// Part 2 - PreOrder --> 8, 5, 7, 6, 9, 10, 11




              
