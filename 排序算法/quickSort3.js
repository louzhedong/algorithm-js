/*
 * @Author: louzhedong
 * @Date: 2021-03-10 13:33:21
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-03-16 18:05:05
 * @Description: 描述一下咯
 */

function quickSort(arr, left, right) {
  if (left > right) return;
  var temp = arr[left];
  var i = left, j = right;

  while(i < j) {
    while(i < j && arr[j] >= temp) j--;
    while(i < j && arr[i] <= temp) i++;
    var current = arr[i];
    arr[i] = arr[j];
    arr[j] = current;
  }

  arr[left] = arr[i];
  arr[i] = temp;

  quickSort(arr, left, i - 1);
  quickSort(arr, i + 1, right);
}

var a = [1,4,5,6,2,3,1,4,6];
quickSort(a, 0, a.length - 1);
console.log(a);