/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  if (!root) return null;

  let num = 0;
  var calculate = function (root) {
      if (root.right) {
          calculate(root.right);
      }
      root.val = num + root.val;
      num = root.val;
      if (root.left) {
          calculate(root.left);
      }
  }

  calculate(root);
  return root;
};