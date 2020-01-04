function BucketSort(array) {
  var min = Number.MAX_VALUE;
  var max = Number.MIN_VALUE;
  var length = array.length;
  var bucketNum;

  // 获取数组最大值和最小值
  for (var i = 0; i < length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }

  // 计算桶的数量
  bucketNum = Math.ceil((max - min) / length) + 1;

  var bucketArray = [];
  for (var i = 0; i < bucketNum; i++) {
    bucketArray[i] = [];
  }

  for (var j = 0; j < length; j++) {
    var cursor = Math.floor((array[j] - min) / length);
    innerSort(bucketArray[cursor], array[j]);
  }

  var newArray = [];
  for (var i = 0; i < bucketNum; i++) {
    for (var j = 0; j < bucketArray[i].length; j++) {
      newArray.push(bucketArray[i][j]);
    }
  }

  return newArray;

}


// 内部排序
function innerSort(array, current) {
  var length = array.length;
  if (length === 0) {
    array[0] = current;
    return;
  }
  for (var i = length - 1; i >= 0; i--) {
    if (array[i] > current) {
      array[i + 1] = array[i];
    } else {
      array[i + 1] = current;
      break;
    }
  }
}


var array = [10, 41, 25, 23, 26, 43, 30]



console.log(BucketSort(array));