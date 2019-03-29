import React, { Component, Fragment } from 'react';

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      list: []
    }
  }
  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }
  render() {
    
    return (
      <Fragment>
        <input value={this.state.value} onChange={this.handleChange.bind(this)}></input>
        <button>add</button>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
