/*
 * @Author: louzhedong
 * @Date: 2021-03-10 09:42:13
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-03-10 09:59:21
 * @Description: 描述一下咯
 */

function quickSort(arr, left, right) {
  var temp = arr[left];
  if (left > right) return;
  var i = left, j = right;
  while(i < j) {
    while(i < j && arr[j] >= temp) j--;
    while(i < j && arr[i] <= temp) i ++;
    var current = arr[i];
    arr[i] = arr[j];
    arr[j] = current;
  }

  arr[left] = arr[i];
  arr[i] = temp;

  quickSort(arr, 0, i-1);
  quickSort(arr, i + 1, right);
}

var a = [1,2,3,4]
quickSort(a, 0, a.length - 1);
console.log(a);