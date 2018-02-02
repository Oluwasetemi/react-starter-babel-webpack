var MyTitle = React.createClass({
  render: function () {
    return (
            React.DOM.div(null,
                React.DOM.h3({className: this.props.class}, this.props.name, [ this.props.title])
            )
        )
  }
})

var MyTitleFact = React.createFactory(MyTitle)
var MyFirstComponent = React.createClass({
  render () {
    return (
            React.DOM.div(null,
                MyTitleFact({name: 'Ojo Oluwasetemi', class: 'qwerty', title: 'hey you'}),
                MyTitleFact({name: 'Godwin'}),
                MyTitleFact({name: 'Chorine'}),
                MyTitleFact({name: 'Kenny'})
            )
        )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
