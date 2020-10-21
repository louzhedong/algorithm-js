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
  if (node) {
    return node.height;
  } else {
    return 1;
  }
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

// LR 先左旋到LL，再右旋
function leftRightRotate(node) {
  const x = node.left;
  node.left = leftRotate(x);
  return rightRotate(node);
}


// RL 先右旋到RR, 再左旋
function rightLeftRotate(node) {
  const x = node.right;
  node.right = rightRotate(x);
  return leftRotate(node);
}

// 插入操作，往根节点为node的树中插入元素element
function insert(node, element) {
  // 如果节点不存在，则创建一个节点
  if (node === null) {
    node = new Node(element);
  }
  else if (element < node.val) {  // 插入左子树
    node.left = insert(node.left, element);
    if (getHeight(node.left) - getHeight(node.right) === 2) {
      if (element < node.left.val) { // LL 
        node = rightRotate(node);
      } else {  // LR
        node = leftRightRotate(node);
      }
    }
  }
  else if (element > node.val) {  // 插入右子树
    node.right = insert(node.right, element);
    if (getHeight(node.right) - getHeight(node.left) === 2) {
      if (element > node.right.val) {  // RR
        node = leftRotate(node);
      } else {  // LR
        node = rightLeftRotate(node);
      }
    }
  }
  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  return node;
}

function minimum(node) {  // 寻找树的最小节点
  let temp = node;
  while (node.left) {
    temp = node.left;
  }
  return temp;
}

function getBalanceFactor(node) {
  if (node === null) {
    return 0;
  }
  return getHeight(node.left) - getHeight(node.right);
}

// 删除节点
function remove(node, element) {
  if (node === null) {
    return null;
  }
  let retNode = null;
  if (element < node.val) {  // 如果比当前节点小
    node.left = remove(node.left, element);
    retNode = node;
  } else if (element > node.val) {  // 如果比当前节点大
    node.right = remove(node.right, element);
    retNode = node;
  } else {  // 如果跟当前元素一样大
    if (node.left === null) {  // 左子树为空
      const rightNode = node.right;
      node.right = null;
      retNode = rightNode;
    } else if (node.right === null) {  // 右子树为空
      const leftNode = node.left;
      node.left = null;
      retNode = leftNode;
    } else { // 左右均不为空
      let replacer = minimum(node.right);
      replacer.right = remove(node.right, replacer.val);
      replacer.left = node.left;

      node.left = node.right = null;
      retNode = replacer;
    }
  }

  if (retNode === null) {
    return null;
  }

  retNode.height = Math.max(getHeight(retNode.left), getHeight(retNode.right)) + 1;
  const balanceFactor = getBalanceFactor(retNode);

  if (balanceFactor > 1 && getBalanceFactor(retNode.left) >= 0) {  // LL
    return rightRotate(retNode);
  }
  if (balanceFactor < -1 && getBalanceFactor(retNode.right) <= 0) {  // RR
    return leftRotate(retNode);
  }
  if (balanceFactor > 1 && getBalanceFactor(retNode.left) < 0) {  // LR
    return leftRightRotate(retNode);
  }
  if (balanceFactor < -1 && getBalanceFactor(retNode.right) > 0) {
    return rightLeftRotate(retNode)
  }
  return retNode;
}


let root = new Node(10);
root = insert(root, 8);
root = insert(root, 6);
console.log(root);

root = remove(root, 8);
console.log(root);