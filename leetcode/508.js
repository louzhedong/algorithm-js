function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var findFrequentTreeSum = function (root) {
  if (!root) return [];
  const treeMap = new Map();
  const valueMap = {};

  scanTree(root, valueMap, treeMap);

  const valuesArray = Object.values(valueMap);

  let max = valuesArray[0];
  for (let i = 1; i < valuesArray.length; i++) {
    if (valuesArray[i] > max) {
      max = valuesArray[i];
    }
  }

  const keysArray = Object.keys(valueMap);
  const result = [];
  for (let i = 0; i < keysArray.length; i++) {
    if (valueMap[keysArray[i]] === max) {
      result.push(keysArray[i]);
    }
  }

  return result;
};

var scanTree = function (root, valueMap, treeMap) {
  if (!root) return;
  const result = getTreeValue(root, treeMap);
  if (valueMap[result]) {
    valueMap[result]++;
  } else {
    valueMap[result] = 1;
  }
  scanTree(root.left, valueMap, treeMap);
  scanTree(root.right, valueMap, treeMap);
}

var getTreeValue = function (root, treeMap) {
  if (!root) return 0;
  if (treeMap.get(root)) {
    return treeMap.get(root);
  } else {
    const result = root.val + getTreeValue(root.left, treeMap) + getTreeValue(root.right, treeMap);
    treeMap.set(root, result);
    return result;
  }
}

const left = new TreeNode(2);
const right = new TreeNode(-5);
const root = new TreeNode(5);
root.left = left;
root.right = right;

console.log(findFrequentTreeSum(root));