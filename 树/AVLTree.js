/**
 * AVL树（平衡二叉树）
 * 是一颗空树
 * 或者它的左右子树的高度差的绝对值不超过1，并且左右两颗子树都是平衡二叉树
 * 平衡因子，左子树和右子树的高度差
 */

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.height = 1;
}

function getHeight(node) {
  return node.height;
}

// LL 右旋转
function rightRotate(node) {
  const x = node.left;
  const temp = x.right;
  node.left = temp;
  x.right = node;
  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;

  return x;
}

// RR 左旋转
function leftRotate(node) {
  const x = node.right;
  const temp = x.left;
  node.right = temp;
  x.left = node;
  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;

  return x;
}