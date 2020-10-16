/*
 * @Author: Michael 
 * @Date: 2020-02-17 15:24:27 
 * @Last Modified by: louzhedong
 * @Last Modified time: 2020-10-16 14:18:31
 * 哈夫曼编码
 */

function TreeNode(val, char) {
  this.val = val; // 数量
  this.char = char;
  this.code = "";
  this.left = this.right = null;
}

/**
 * str 需要编码的字符串
 */
function HuffmanCompression(str) {
  const charCountMap = {};
  var heap = [];
  var length = str.length;
  /**
   * 第一步，统计字符串中所有字符出现的频率
   */
  for (var i = 0; i < length; i++) {
    if (charCountMap[str[i]]) {
      charCountMap[str[i]] = charCountMap[str[i]] + 1;
    } else {
      charCountMap[str[i]] = 1;
    }
  }


  var charCountMapKeys = Object.keys(charCountMap);  // 字符串中出现的去重的字符
  /**
   * 第二步，对出现的字符频率进行排序，并放入一个堆栈中
   */
  var tempCharArray = []
  for (var i = 0; i < charCountMapKeys.length; i++) {
    var currentKey = charCountMapKeys[i];
    tempCharArray.push({ val: charCountMap[currentKey], char: currentKey });
  }
  tempCharArray.sort(function (a, b) { return a.val - b.val });


  for (var i = 0; i < tempCharArray.length; i++) {
    heap.push(new TreeNode(tempCharArray[i].val, tempCharArray[i].char));
  }

  // heap最终只剩下一个元素，这个元素是二叉树
  // 遍历的过程是将两个频率最小的节点的频率进行相加，并通过计算得出的频率，生成一个父节点，再放入堆栈中
  while (heap.length > 1) {
    var first = heap.shift();
    var second = heap.shift();
    var sum = first.val + second.val;
    var char = first.char + second.char;

    var newTreeNode = new TreeNode(sum, char);
    newTreeNode.left = first;
    newTreeNode.right = second;

    heap.push(newTreeNode);
    heap.sort(function (a, b) { return a.val - b.val });
  }

  calculateCode(heap[0]);
  var codeMap = {};
  generateCodeMap(heap[0], codeMap);

  var result = "";
  for (var i = 0; i < str.length; i++) {
    result += codeMap[str[i]];
  }
  return result;
}

// 从树根开始遍历，计算出所有节点的code,与保存的字符对应
function calculateCode(node) {
  if (node.left) {
    node.left.code = node.code + '0';
    calculateCode(node.left);
  }
  if (node.right) {
    node.right.code = node.code + '1';
    calculateCode(node.right);
  }
}

function generateCodeMap(node, codeMap) {
  if (!node.left && !node.right) {
    codeMap[node.char] = node.code;
  }
  if (node.left) {
    generateCodeMap(node.left, codeMap);
  }
  if (node.right) {
    generateCodeMap(node.right, codeMap);
  }
}

console.log(HuffmanCompression("everyday is awesome!"));