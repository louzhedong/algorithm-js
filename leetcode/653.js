function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const set = new Set();

  var findValue = function (root) {
    if (!root) return false;
    const diff = k - root.val;
    if (set.has(diff)) return true
    set.add(root.val);
    return findValue(root.left) || findValue(root.right);
  }
  return findValue(root);
};

const left = new TreeNode(1);
const right = new TreeNode(3);
const root = new TreeNode(2);
root.left = left;
root.right = right;

console.log(findTarget(root, 4));