/**
 * 堆排序
 * @param {} array 
 */
function HeapSort(array) {
  var length = array.length;
  buildMaxHeap(array);
  for (var i = length - 1; i > 0; i--) {
    swap(array, 0, i);
    length--;
    heapify(array, 0, length);
  }
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function buildMaxHeap(array) {
  var length = array.length;
  for (var i = length - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }
}

function heapify(array, i, length) {
  var left = i * 2 + 1,
    right = i * 2 + 2;
  largestIndex = i

  if (left < length && array[left] > array[largestIndex]) {
    largestIndex = left;
  }

  if (right < length && array[right] > array[largestIndex]) {
    largestIndex = right;
  }

  if (largestIndex !== i) {
    swap(array, largestIndex, i);
    heapify(array, largestIndex, length);
  }

}

var array = [10, 41, 25, 23, 26, 43, 30]

HeapSort(array);

console.log(array);