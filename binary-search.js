/***
 * Binary search function
 * Speed: O(log n)
 *
 * Args: sorted Array, element that need to find
 * Return: element index in array
 *  */

function average(...arrgs) {
  let summ = 0;
  arrgs.forEach((num) => (summ += num));
  return Math.floor(summ / arrgs.length);
}

function binarySearch(arr = [], el = null) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = average(start, end),
      search = arr[mid];
    if (search === el) {
      return mid;
    } else if (search < el) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

let array = [1, 2, 3];

console.log(binarySearch(array, 3));
//console.log(average(2, 2, 2, 6));
