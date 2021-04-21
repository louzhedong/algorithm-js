/*
 * @Author: louzhedong
 * @Date: 2020-01-04 09:50:10
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-03-10 13:50:48
 * @Description: 描述一下咯
 */
/**
 * 归并排序
 * @param {*} array 
 */
function MergeSort(array) {
  var length = array.length;
  _sort(array, 0, length - 1);
}

function _sort(array, left, right) {
  if (left === right) {
    return;
  }
  var length = right - left;
  var middle = Math.floor(length / 2) + left;
  _sort(array, left, middle);
  _sort(array, middle + 1, right);
  _merge(array, left, middle, right);
}

function _merge(array, left, middle, right) {
  var result = [];
  var i = 0;
  var cursor1 = left, cursor2 = middle + 1;

  while (cursor1 <= middle && cursor2 <= right) {
    if (array[cursor1] < array[cursor2]) {
      result.push(array[cursor1]);
      cursor1++;
    } else {
      result.push(array[cursor2]);
      cursor2++;
    }
    i++;
  }

  while (cursor1 <= middle) {
    result[i++] = array[cursor1++];
  }

  while (cursor2 <= right) {
    result[i++] = array[cursor2++];
  }

  for (var i = 0; i < result.length; i++) {
    array[left + i] = result[i];
  }
}


const array = [3, 1, 34, 5, 6, 22, 3, 34, 7, 8, 12];
MergeSort(array);

console.log(array);