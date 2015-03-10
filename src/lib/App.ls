React = require 'react'
{ Component, PropTypes, { div }:DOM } = React

Hello = React.createFactory require './Hello'

class App extends Component
  render: ~>
    { className = '', children } = @props
    div do
      className: 'app ' + className
      Hello {} 'This the component in default mode.'
      Hello do
        className: \sm
        'This is the same component in small mode.'
      Hello do
        className: \sm
        'This is another one.'
      Hello do
        className: \xs
        'This is the extra small one.'
      Hello do
        className: \xs
        'And here is another one!'
      children

module.exports = App

