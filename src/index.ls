React = require 'react'
App   = React.createFactory require './lib/App'

require './index.css'

React.render App!, document.getElementById \container
