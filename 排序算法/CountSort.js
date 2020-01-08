function CountSort(array) {
  var length = array.length;

  var min = Number.MAX_VALUE;
  var max = Number.MIN_VALUE;

  for (var i = 0; i < length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }

  var distance = max - min;
  var countArray = [];
  for (var i = 0; i <= distance; i++) {
    countArray[i] = 0;
  }

  for (var i = 0; i < length; i++) {
    countArray[array[i] - min] += 1;
  }

  var result = [];
  for (var i = 0; i <= distance; i++) {
    for (j = 0; j < countArray[i]; j++) {
      result.push(i + min);
    }
  }

  return result;
}

var array = [1, 4, 6, -1, 4, 7, 9];

console.log(CountSort(array));