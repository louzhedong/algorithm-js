function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  if (!t) return true;

  const tRootVal = t.val;

  const sSubTree = getSubOfS(s, tRootVal);


  if (!sSubTree) return false;
  let flag = true;
  var ifDifficult = function (tree1, tree2) {
    if (!tree1 && !tree2) {
      return;
    }
    if (tree1 && !tree2) {
      flag = false;
      return;
    }
    if (tree2 && !tree1) {
      flag = false;
      return;
    }
    if (tree1.val === tree2.val) {
      ifDifficult(tree1.left, tree2.left);
      ifDifficult(tree1.right, tree2.right);
    }
  }

  ifDifficult(sSubTree, t);

  return flag;

};

var getSubOfS = function (s, target) {
  if (!s) return null;
  if (s.val === target) {
    return s;
  }

  return getSubOfS(s.left, target) || getSubOfS(s.right, target);
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node3 = new TreeNode(3);

node3.left = node4;
node3.right = node5;
node4.left = node1;
node4.right = node2;
node2.left = new TreeNode(0);

const _node1 = new TreeNode(1);
const _node2 = new TreeNode(2);
const _node4 = new TreeNode(4);
_node4.left = _node1;
_node4.right = _node2;

console.log(isSubtree(node3, _node4));