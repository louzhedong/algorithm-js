function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var getMinimumDifference = function (root) {
  let min;

  var getMin = function (root) {
    if (!root) return;

    if (root.left) {
      const temp = root.val - getRootMax(root.left);
      min = Math.min(min, temp);
    }
    if (root.right) {
      const temp = getRootMin(root.right) - root.val;
      console.log(temp);
      min = Math.min(min, temp);
    }

    getMin(root.left);
    getMin(root.right);
  }

  if (root.left) {
    min = root.val - root.left.val;
  }
  if (root.right) {
    min = root.right.val - root.val;
  }

  getMin(root);
  return min;
};


var getRootMin = function (root) {
  let node = root;
  while (node.left) {
    node = node.left;
  }
  return node.val;
}

var getRootMax = function (root) {
  let node = root;
  while (node.right) {
    node = node.right;
  }
  return node.val;
}

const node1 = new TreeNode(519);
const node2 = new TreeNode(1277);
node2.left = node1;
const node3 = new TreeNode(2776);
const node4 = new TreeNode(2236);
node4.left = node2;
node4.right = node3;
const root = new TreeNode(0);
root.right = node4;

console.log(getMinimumDifference(root));