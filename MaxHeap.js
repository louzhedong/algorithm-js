
// 下沉 i为当前元素的索引
function sink(array, i) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max_index = i;

  // 先判断左子节点是否比右子节点大
  let flag;
  if (left < array.length && right < array.length) {
    flag = array[left] > array[right];
  } else {
    flag = true;
  }

  if (left < array.length && array[left] > array[max_index] && flag) {
    max_index = left;
  }
  if (right < array.length && array[right] > array[max_index] && !flag) {
    max_index = right;
  }


  if (max_index != i) { // 当前节点不是最大的
    let temp = array[i];
    array[i] = array[max_index];
    array[max_index] = temp;
    sink(array, max_index);
  }
}

// 上浮
function swim(array, i) {
  if (i === 0) {
    return;
  }
  const father = Math.floor((i - 1) / 2);
  if (array[father] < array[i]) {
    let temp = array[i];
    array[i] = array[father];
    array[father] = temp;
    swim(array, father);
  }
}

function max_heap(array) {
  const length = array.length;
  for (let i = length - 1; i >= 0; i--) {
    sink(array, i);
  }
  return array;
}

const array = [79, 66, 43, 83, 30, 87, 38, 55, 91, 72, 49, 9];
console.log(max_heap(array));

/**
 * 每次取出最大的元素，将最后的元素放置到根的位置，然后做下沉动作
 */
const result = [];

while(array.length > 0 ) {
  const maxItem = array.shift();
  result.push(maxItem);
  if (array.length > 0) {
    array.unshift(array[array.length - 1]);
    array.pop();
    sink(array, 0);
  }
}

console.log(result);
