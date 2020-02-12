/*
 * @Author: Michael 
 * @Date: 2020-02-12 20:08:37 
 * @Last Modified by: Michael
 * @Last Modified time: 2020-02-12 20:28:21
 * 反转链表
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const head = new ListNode(1);
let cursor = head;
for (let i = 2; i < 10; i++) {
  cursor.next = new ListNode(i);
  cursor = cursor.next;
}

// 反转链表
let prev = null;
let _head = head;
while(_head) {
  let next = _head.next;
  _head.next = prev;
  prev = _head;
  _head = next;
}

console.log(prev);
