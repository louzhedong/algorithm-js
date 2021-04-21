/*
 * @Author: louzhedong
 * @Date: 2021-03-12 17:36:56
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-03-12 17:39:10
 * @Description: 描述一下咯
 */
function deepCopy(obj) {
  if (typeof obj != 'object') return;
  var newObj = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] == 'object' ? deepCopy(obj[key]): obj[key];
    }
  }
  return newObj;
}