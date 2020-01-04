function bubbleSort(array) {
  if (!Array.isArray(array)) {
    throw new Error('参数必须为数组');
    return;
  }
  var length = array.length;
  for (var i = length - 1; i > 0;) {
    var cursor = 0;
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        cursor = j;
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    i = cursor;
  }
}

var array = [2,1,3,4,5,6];

bubbleSort(array);

console.log(array);