function InsertSort(array) {
  var length = array.length;

  for (var i = 1; i < length; i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] > array[j]) {
        var temp = array[i];
        for (var k = i; k > j; k--) {
          array[k] = array[k - 1];
        }
        array[j] = temp;
      }
    }
  }
}

var array = [2, 3, 4, 12, 3, 54, 6, 7, 1];

InsertSort(array);

console.log(array);