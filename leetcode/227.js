/*
 * @Author: louzhedong
 * @Date: 2021-04-15 17:54:17
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-04-16 09:45:14
 * @Description: 描述一下咯
 */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = removeSpace(s);
  var stack = [],
    len = s.length,
    i = 0,
    j = 1;
  for (; i < len; i++) {
    var current = s[i];
    if (current == ' ') {
      continue;
    } else if (current == '/') {
      var divisor = stack.pop();
      stack.push(Math.floor(Number(divisor) / Number(s[i + 1])));
      i++;
    } else if (current == '*') {
      var multiplier = stack.pop();
      stack.push(Number(multiplier) * Number(s[i + 1]));
      i++;
    } else {
      stack.push(current);
    }
  }
  var result = Number(stack[0]);
  for (; j < stack.length; j++) {
    if (stack[j] == '+') {
      result += Number(stack[j + 1]);
      j++;
    } else if (stack[j] == '-') {
      result -= Number(stack[j + 1]);
      j++;
    }
  }
  return result;
};

var removeSpace = function (s) {
  var res = [];
  var currentNumber = '';
  for (var i = 0; i < s.length; i++) {
    var current = s[i];
    if (current != ' ') {
      if (
        current == '+' ||
        current == '-' ||
        current == '*' ||
        current == '/'
      ) {
        res.push(current);
      } else {
        if (currentNumber) {
          current = Number(currentNumber) * 10 + Number(current);
        }
        if ((i + 1) < s.length && !isNaN(s[i + 1]) && s[i + 1] != ' ') {
          currentNumber = current;
        } else if ((i + 1) < s.length && isNaN(s[i + 1]) && s[i + 1] != ' ') {
          res.push(current);
          currentNumber = '';
        } else {
          res.push(current);
        }
      }
    }
  }
  return res;
};

console.log(calculate(' 3+5 / 2 '));
