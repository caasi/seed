(function(){
  var React, Component, PropTypes, DOM, div, Hello, App;
  React = require('react');
  Component = React.Component, PropTypes = React.PropTypes, DOM = React.DOM, div = DOM.div;
  Hello = React.createFactory(require('./Hello'));
  App = (function(superclass){
    var prototype = extend$((import$(App, superclass).displayName = 'App', App), superclass).prototype, constructor = App;
    prototype.render = function(){
      var ref$, className, ref1$, children;
      ref$ = this.props, className = (ref1$ = ref$.className) != null ? ref1$ : '', children = ref$.children;
      return div({
        className: 'app ' + className
      }, Hello({}, 'This the component in default mode.'), Hello({
        className: 'sm'
      }, 'This is the same component in small mode.'), Hello({
        className: 'sm'
      }, 'This is another one.'), Hello({
        className: 'xs'
      }, 'This is the extra small one.'), Hello({
        className: 'xs'
      }, 'And here is another one!'), children);
    };
    function App(){
      this.render = bind$(this, 'render', prototype);
      App.superclass.apply(this, arguments);
    }
    return App;
  }(Component));
  module.exports = App;
  function bind$(obj, key, target){
    return function(){ return (target || obj)[key].apply(obj, arguments) };
  }
  function extend$(sub, sup){
    function fun(){} fun.prototype = (sub.superclass = sup).prototype;
    (sub.prototype = new fun).constructor = sub;
    if (typeof sup.extended == 'function') sup.extended(sub);
    return sub;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
