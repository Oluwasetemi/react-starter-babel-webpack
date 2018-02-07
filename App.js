import React, { Component } from 'react';
import style from './src/styles/style.css';

class MyTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3 className={this.props.class}>        
        Hello, World
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
        <MyTitle class={"qwerty"} 
        title={"hey you are MyTitle Component"} />
        <MyTitle />
        <MyTitle />
        <MyTitle />
      </div>
    )
  }
}