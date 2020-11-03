function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var findBottomLeftValue = function (root) {
  if (!root) return null;
  let stack = [root];
  let flag = true;

  while (stack.length > 0 && flag) {
    const _stack = [];
    const oldStack = copyArray(stack);
    while (stack.length > 0) {
      const current = stack.shift();
      if (current.left) {
        _stack.push(current.left);
      }
      if (current.right) {
        _stack.push(current.right);
      }
    }
    if (_stack.length > 0) {
      stack = _stack;
    } else {
      stack = oldStack;
      flag = false;
    }
  }
  return stack[0].val;
};

var copyArray = function (array) {
  const result = [];
  array.map(item => {
    result.push(item);
  })
  return result;
}

const left = new TreeNode(1);
const right = new TreeNode(3);
const root = new TreeNode(2);

root.left = left;
root.right = right;

console.log(findBottomLeftValue(root));