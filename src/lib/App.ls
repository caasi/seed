React = require 'react'
{ Component, PropTypes, { div }:DOM } = React

Hello = React.createFactory require './Hello'

class App extends Component
  render: ~>
    { className = '', children } = @props
    div do
      className: 'app ' + className
      Hello!
      Hello className: \sm
      Hello className: \sm
      Hello className: \xs
      Hello className: \xs
      Hello className: \xs
      children

module.exports = App

