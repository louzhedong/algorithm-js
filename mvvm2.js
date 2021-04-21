/*
 * @Author: louzhedong
 * @Date: 2021-03-30 13:56:40
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-03-30 14:26:36
 * @Description: 描述一下咯
 */

function Vue(options) {
  this.init(options);
}

Vue.prototype.init = function(options) {
  this.binding = {};
  this.$options = options;
  this.$el = document.querySelector(options.el);
  this.$data = options.data;

  this.observe(this.$data);
  this.compile(this.$el);
}

Vue.prototype.observe = function(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      this.binding[key] = [];
      let value = obj[key];
      if (typeof value === 'object') {
        this.observe(value);
      }
      var binding = this.binding[key];
      Object.defineProperty(this.$data, key, {
        enumerable: true,
        configurable: true,
        get() {
          return value;
        },
        set(newVal) {
          if (value !== newVal) {
            value = newVal;
            binding.forEach(item => {
              item.update();
            })
          }
        }
      })
    }
  }
}

Vue.prototype.compile = function(root) {
  var _this = this;
  var nodes = root.children;
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (node.children.length) {
      this.compile(node);
    }

    if (node.hasAttribute('v-model') && node.tagName === 'INPUT') {
      node.addEventListener('input', (function(i) {
        var attrVal = node.getAttribute('v-model');
        _this.binding[attrVal].push(new Watcher(node, attrVal, 'value'));
        return function() {
          this.$data[attrVal] = nodes[i].value;
        }
      })(i))
    }

    if (node.hasAttribute('v-bind')) {
      var attrVal = node.getAttribute('v-bind');
      this.binding[attrVal].push(new Watcher(node, attrVal, 'innerHTML'));
    }
  }
}

function Watcher(el, exp, attr) {
  this.el = el;
  this.exp = exp;
  this.attr = attr;
}

Watcher.prototype.update = function() {
  this.el[this.attr] = this.$data[this.exp];
}