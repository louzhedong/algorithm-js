/*
 * @Author: Michael 
 * @Date: 2019-02-11 15:16:16 
 * @Last Modified by: Michael
 * @Last Modified time: 2019-02-11 15:28:25
 */

function quickSort(left, right, array) {
  var temp = array[left];

  if (left > right) return;
  var i = left;
  var j = right;
  while (i < j) {
    while (array[j] >= temp && j > i) {
      j--;
    }
    while (array[i] <= temp && i < j) {
      i++;
    }
    var current = array[i];
    array[i] = array[j];
    array[j] = current;
  }

  array[left] = array[i];
  array[i] = temp;

  quickSort(left, i - 1, array);
  quickSort(j + 1, right, array);
}

var array = [6, 2, 3, 5, 7, 2, 4, 8, 9, 12, 3, 4, 6, 9];
quickSort(0, array.length - 1, array);
console.log(array);