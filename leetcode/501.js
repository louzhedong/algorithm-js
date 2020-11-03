function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var findMode = function (root) {
  let result = [];
  let currentVal;
  let currentCount;
  let maxCount = 0;

  function getCurrent(node) {
    if (!node) return;
    getCurrent(node.left);
    if (node.val !== currentVal) {
      currentVal = node.val;
      currentCount = 1;
    } else {
      currentCount++;
    }
    if (currentCount === maxCount) {
      result.push(node.val);
    }
    if (currentCount > maxCount) {
      maxCount = currentCount;
      result = [node.val];
    }
    getCurrent(node.right);
  }

  getCurrent(root);
  return result;
};

const left = new TreeNode(1);
const right = new TreeNode(2);
const root = new TreeNode(2);
root.left = left;
root.right = right;

console.log(findMode(root));