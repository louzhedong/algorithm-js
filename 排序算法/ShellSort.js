function ShellSort(array) {
  var length = array.length;

  for (var gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (var i = gap; i < length; i++) {
      insertI(array, gap, i);
    }
  }
}

function insertI(array, gap, i) {
  var inserted = array[i];
  var j;
  for (j = i - gap; j >= 0 && inserted < array[j]; j -= gap) {
    array[j + gap] = array[j];
  }

  array[j + gap] = inserted;
}

var array = [5,4,7,3,6,2,1,4,6,8,9,1];


ShellSort(array);

console.log(array);