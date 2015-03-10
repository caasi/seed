React = require 'react'
{ Component, PropTypes, { div, h1, img }:DOM } = React

class Hello extends Component
  @propTypes =
    image: PropTypes.string
    title: PropTypes.string
  @defaultProps =
    image: 'http://placekitten.com/g/300/300'
    title: 'Hello, World'
  (@props) ->
  render: ~>
    { className = '', children, image, title, content } = @props
    div do
      className: 'hello ' + className
      img do
        className: 'image'
        src: image
      h1 do
        className: 'title'
        title
      div do
        className: 'content'
        children

module.exports = Hello

