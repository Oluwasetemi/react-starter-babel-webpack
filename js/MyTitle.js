import React from 'react'

var MyTitle = React.createClass({
  render () {
    return (
            div(null,
                h1({ style: {color: this.props.color} }, this.props.title)
            )
        )
  }
})

export default MyTitle
