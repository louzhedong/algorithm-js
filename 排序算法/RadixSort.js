/**
 * 基数排序
 * @param {*} array 
 */
function RadixSort(array) {
  var max = Number.MIN_VALUE,
    length = array.length;

  for (var i = 0; i < length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  var numberLength = max.toString().length;

  for (var i = 0; i < length; i++) {
    var current = array[i].toString();
    var currentLength = current.length;
    for (var j = 0; j < numberLength - currentLength; j++) {
      current = "0" + current;
    }

    array[i] = current;
  }

  // 从个位开始往前排
  for (var i = numberLength - 1; i >= 0; i--) {
    for (var j = 1; j < length; j++) {
      var temp = array[j];
      var k = j - 1;
      for (; k >= 0; k--) {
        if (temp[i] < array[k][i]) {
          array[k + 1] = array[k];
        } else {
          break;
        }
      }
      array[k + 1] = temp;
    }
  }

  for (var i = 0; i < length; i++) {
    array[i] = parseInt(array[i]);
  }
}

const array = [3, 1, 34, 5, 6, 22, 3, 34, 7, 8, 12];
RadixSort(array);