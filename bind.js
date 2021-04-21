/*
 * @Author: louzhedong
 * @Date: 2021-03-19 14:19:03
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-03-19 15:13:01
 * @Description: 描述一下咯
 */
Function.prototype.bind = function(ctx) {
  const self = this;
  const args = Object.prototype.slice.call(arguments, 1);
  const fBound = function() {
    const bindArgs = Object.prototype.slice.call(arguments);
    return self.apply(this instanceof fBound ? this : ctx, args.concat(bindArgs));
  }
  fBound.prototype = this.prototype;
  return fBound;
}

var curry = fn => 
  judge = (...args) =>
    fn.length === args.length ?
      fn(...args) :
        arg => judge(...args, arg)
