import React, { Component } from 'react';
class MyTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3 className={this.props.class}>        {this.props.name}
        </h3> 
        {[this.props.title]} 
      </div>
    );
  }
}
export default class MyFirstComponent extends React.Component {
  render() {
    return (
      <div>
        <MyTitle name={"Kenny"} class={"qwerty"} title={"hey you are MyTitle Component"} />
        <MyTitle name={"Kenny"} />
        <MyTitle name={"Kenny"} />
        <MyTitle name={"Kenny"} />
      </div>
    )
  }
}