(function(){
  var React, Component, PropTypes, DOM, div, h1, img, Hello;
  React = require('react');
  Component = React.Component, PropTypes = React.PropTypes, DOM = React.DOM, div = DOM.div, h1 = DOM.h1, img = DOM.img;
  Hello = (function(superclass){
    var prototype = extend$((import$(Hello, superclass).displayName = 'Hello', Hello), superclass).prototype, constructor = Hello;
    Hello.propTypes = {
      image: PropTypes.string,
      title: PropTypes.string
    };
    Hello.defaultProps = {
      image: 'http://placekitten.com/g/300/300',
      title: 'Hello, World'
    };
    function Hello(props){
      this.props = props;
      this.render = bind$(this, 'render', prototype);
    }
    prototype.render = function(){
      var ref$, className, ref1$, children, image, title, content;
      ref$ = this.props, className = (ref1$ = ref$.className) != null ? ref1$ : '', children = ref$.children, image = ref$.image, title = ref$.title, content = ref$.content;
      return div({
        className: 'hello ' + className
      }, img({
        className: 'image',
        src: image
      }), h1({
        className: 'title'
      }, title), div({
        className: 'content'
      }, children));
    };
    return Hello;
  }(Component));
  module.exports = Hello;
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
