/*
 * @Author: louzhedong
 * @Date: 2021-03-13 16:55:54
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-03-16 18:12:05
 * @Description: 描述一下咯
 */
const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');

const code = 'function getUser(){}';

const ast = esprima.parseScript(code);
estraverse.traverse(ast, {
  enter(node) {
    if (node.type === 'Identifier') {
      node.name = 'hello';
    }
  }
})

const result = escodegen.generate(ast);
console.log(result);


function quickSort(arr, left, right) {
  if (left > right) return;
  let first = arr[left],
    i = left,
    j = right;
  while(i < j) {
    while(i < j && arr[j] >= first) j--;
    while(i < j && arr[i] <= first) i++;
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  arr[left] = arr[i];
  arr[i] = first;


  quickSort(arr, left, i -1);
  quickSort(arr, i + 1, right);
}

const arr = [1,4,5,6,2,3,1,4,6];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

function mergeSort(arr, left, right) {
  if (left === right) return;
  const middle = Math.floor((right - left) / 2) + left;
  mergeSort(arr, left, middle);
  mergeSort(arr, middle + 1, right);
  merge(arr, left, middle, right);
}

function merge(arr, left, middle, right) {
  let cursor1 = left,
    cursor2 = middle + 1,
    i = 0,
    temp = [];

  while(cursor1 <= middle && cursor2 <= right) {
    if (arr[cursor1] <= arr[cursor2]) {
      temp[i++] = arr[cursor1++];
    } else {
      temp[i++] = arr[cursor2++];
    }
  }

  while (cursor1 <= middle) {
    temp[i++] = arr[cursor1++];
  }
  while (cursor2 <= right) {
    temp[i++] = arr[cursor2++];
  }

  for (let k = 0; k < i; k++) {
    arr[left + k] = temp[k];
  }
}

function deepClone(obj) {
  if (typeof obj !== 'object') return;
  const newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}

function buildMaxHeap(array) {
  const length = array.length;
  for (let i = length - 1; i >= 0; i--) {
    heapify(array, i, length);
  }
}

function heapify(array, i , length) {
  let left = i * 2 + 1,
    right = i * 2 + 2,
    largestIndex = i;

    while(left < length && array[left] > array[largestIndex]) {
      largestIndex = left;
    }
    while(right < length && array[right] > array[largestIndex]) {
      largestIndex = right;
    }
    if (i !== largestIndex) {
      swap(array, i, largestIndex);
      heapify(array, largestIndex, length);
    }
}


function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function HeapSort(array) {
  let length = array.length;
  buildMaxHeap(array);
  for (let i = length -1; i>=0; i--) {
    swap(array, 0, i);
    length--;
    heapify(array, 0, length);
  }
}