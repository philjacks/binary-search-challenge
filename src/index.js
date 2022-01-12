const binarySearch = (num, array) => {
  // sort array in order
  array.sort((a, b) => a - b);

  // declare beginning & end of array as variables
  let start = array[0];
  let end = array.length - 1;

  // repeat process while start & end are seperate
  while (start <= end) {
    // figure thr middle index & number
    let mid = Math.floor((start + end) / 2);
    let midNum = array.at(mid);

    // check if num is equal to middle num, if not adjust the start & end of array for next iteration
    if (midNum === num) {
      return array.indexOf(midNum);
    } else if (midNum < num) {
      start = mid + 1;
    } else if (midNum > num) {
      end = mid - 1;
    }
  }

  // if num is not in array return -1
  const noNum = !array.includes(num) ? -1 : null;

  // noNum returns if the while loop doesn't find a match
  return noNum;
};

console.log(
  binarySearch(90, [1, 4, 1, 9, 5, 17, 11, 13, 25, 15, 88, 56, 42, 90, 67])
);

// [1, 4, 5, 9, 11, 12, 13, 15, 17, 25];
