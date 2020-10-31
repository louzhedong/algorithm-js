function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const result = [];

  if (!root) return JSON.stringify(result);

  const stack = [];
  stack[0] = root;
  while (stack.length > 0) {
    const current = stack.shift();
    if (current) {
      result.push(current.val);
      stack.push(current.left);
      stack.push(current.right);
    } else {
      result.push(null);
    }
  }

  let flag = false;
  while (!flag) {
    if (result[result.length - 1] === null) {
      result.pop();
    } else {
      flag = true;
    }
  }

  return JSON.stringify(result);
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function (data) {
  const array = JSON.parse(data);
  console.log(array);
  if (array.length === 0) return null;
  const stack = [];
  const current = array.shift();
  const root = new TreeNode(current);
  stack[0] = root;
  const _root = root;

  while (array.length > 0) {
    const currentNode = stack.shift();
    const leftVal = array.shift();
    const rightVal = array.shift();
    if (leftVal !== null && leftVal !== undefined) {
      const leftNode = new TreeNode(leftVal);
      currentNode.left = leftNode;
      stack.push(leftNode);
    } else {
      currentNode.left = null;
    }
    if (rightVal !== null && rightVal !== undefined) {
      const rightNode = new TreeNode(rightVal);
      currentNode.right = rightNode;
      stack.push(rightNode);
    } else {
      currentNode.right = null;
    }
  }

  return _root;
};

// const node4 = new TreeNode(4);
// const node5 = new TreeNode(5);
// const node3 = new TreeNode(3);
// node3.left = node4;
// node3.right = node5;
// const node2 = new TreeNode(2);
// const root = new TreeNode(1);
// root.left = node2;
// root.right = node3;

const node2 = new TreeNode(2);
const root = new TreeNode(1);
root.left = node2;

var result = deserialize(serialize(root));
console.log(result);