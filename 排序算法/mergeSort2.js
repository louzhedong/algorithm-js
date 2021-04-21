/*
 * @Author: louzhedong
 * @Date: 2021-03-10 13:43:05
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-03-10 15:16:22
 * @Description: 描述一下咯
 */

function merge(arr, left, middle, right) {
  var cursor1 = left,
    cursor2 = middle + 1,
    i = 0,
    result = [];

  while(cursor1 <= middle && cursor2 <= right) {
    if (arr[cursor1] <= arr[cursor2]) {
      result[i++] = arr[cursor1++];
    } else {
      result[i++] = arr[cursor2++];
    }
  }

  while(cursor1 <= middle) {
    result[i++] = arr[cursor1++];
  }
  while(cursor2 <= right) {
    result[i++] = arr[cursor2++];
  }

  for (var k = 0; k < i; k++) {
    arr[left + k] = result[k];
  }
}

function sort(arr, left, right) {
  if (left == right) return;
  var middle = Math.floor((right - left) / 2) + left;
  sort(arr, left, middle);
  sort(arr, middle + 1, right);
  merge(arr, left, middle, right);
}

var a = [9,8,7,6,5,4,3,2,1];
sort(a, 0, a.length - 1);
console.log(a);