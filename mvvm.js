/*
 * @Author: louzhedong
 * @Date: 2021-03-11 16:27:34
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-03-12 14:14:38
 * @Description: 描述一下咯
 */

var bind = {};

function observe(data) {
  if (!data || typeof data !== 'object') return;
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key]);
  })
}

function defineReactive(data, key, val) {
  observe(val);
  bind[key] = [];
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get: function() {
      return val;
    },

    set: function(newVal) {
      console.log(val, '--->', newVal);
      val = newVal;
      bind[key].forEach(item => {
        item.update();
      })
    }
  })
}

function compile(root) {
  var nodes = root.children;
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (node.children.length) {
      compile(node);
    }
    if (node.hasAttribute('v-model') && (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA')) {
      node.addEventListener('input', (function(key){
        var attrVal = node.getAttribute('v-model');
        bind[attrVal].push(new Wather('input', node, this, attrVal, 'value'));
        return function() {
          obj[attrVal] = nodes[key].value;
        }
      })(i))
    }
    if (node.hasAttribute('v-bind')) {
      var attrVal = node.getAttribute('v-bind');
      bind[attrVal].push(new Wather('text', node, this, attrVal, 'innerHTML'));
      console.log(bind);
    }
  }
}

function Wather(name, el, vm, exp, attr) {
  this.name = name;
  this.el = el;
  this.vm = vm;
  this.exp = exp;
  this.attr = attr;

  this.update();
}

Wather.prototype.update = function() {
  this.el[this.attr] = obj[this.exp];
}

var obj = {
  name: 'michael',
  age: 12
}

observe(obj);
compile(document.body.querySelector('#app'));