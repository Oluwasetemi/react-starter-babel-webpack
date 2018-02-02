import React from 'react'
import {render} from 'react-dom'
import {MyTitle, MyFirstComponent} from './MyTitle'


var div = React.DOM.div
var h1 = React.DOM.h1



var MyTitleFactory = React.createFactory(MyTitle)
var MyFirstComponent = React.createClass({
    render() {
        return (
            div(null,
                MyTitleFactory({
                    title: 'Props are great!',
                    color: 'rebeccapurple'
                }),
                MyTitleFactory({
                    title: 'Use props everywhere!',
                    color: 'mediumaquamarine'
                }),
                MyTitleFactory({
                    title: 'Props are the best!',
                    color: 'peru'
                }),
                MyTitleFactory({
                    title: 'Props are great!!4'
                })
            )
        )
    }
})

{/*render(, document.getElementById('app'))*/}