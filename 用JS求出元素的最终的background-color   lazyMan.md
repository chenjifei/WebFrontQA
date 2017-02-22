## 一、用JS求出元素的最终的background-color，不考虑元素float情况。

```javascript
widow.getComputedStyle (获取css中设置的样式，'准浏览器'。返回的对象中，驼峰命名和中划线命名的都有，如：background-color和backgroundColor都有。 element.style (获取的是元素行间设置的样式) element.currentStyle (ie低版本)

// 获取指定元素的某个CSS样式，兼容IE
var getStyle = function($el, _attr) {
    if(window.getComputedStyle) {
        return window.getComputedStyle($el, null)[_attr]
    }
    if($el.currentStyle) {
        return $el.currentStyle[_attr];
    }
    return $el.style[_attr];
}

var getBG = function($el) {
    var color = getStyle($el, 'backgroundColor');
    if(color === 'rgba(0, 0, 0, 0)' || color === 'transparent') { // 判断是否透明
        if($el.tagName === 'HTML') {
            return 'rgb(255, 255, 255)'; // 默认为白色
        } else {
            return arguments.callee($el.parentNode, 'backgroundColor')
        }
    } else {
        return color;
    }
}
```

## 二、实现LazyMan

```javascript
    function _LazyMan(_name) {
    var _this = this;
    _this.tasks = [];
    _this.tasks.push(function() {
        console.log('Hi! This is ' + _name + '!');
        // 这里的this是window，所以要缓存this
        _this.next();
    });
    setTimeout(function() {
        _this.next();
    }, 0);
}

// push函数里面的this和setTimeout函数里面的this都指向全局作用域，所以要缓存当前this指向
_LazyMan.prototype.next = function() {
    var _fn = this.tasks.shift();
    _fn && _fn();
}
_LazyMan.prototype.sleep = function(_time) {
    var _this = this;
    _this.tasks.push(function() {
        setTimeout(function() {
            console.log('Wake up after ' + _time);
            _this.next();
        }, _time);
    });
    return _this;
}
_LazyMan.prototype.sleepFirst = function(_time) {
    var _this = this;
    _this.tasks.unshift(function() {
        setTimeout(function() {
            console.log('Wake up after ' + _time);
            _this.next();
        }, _time);
    });
    return _this;
}
_LazyMan.prototype.eat = function(_eat) {
    var _this = this;
    _this.tasks.push(function() {
        console.log('Eat ' + _eat);
        _this.next();
    });
    return _this;
}

// 封装对象
var LazyMan = function(_name) {
    return new _LazyMan(_name);
}
```
