import React, { Component, Fragment } from 'react';
import Todoitem from './Todoitem';
import './style.css';

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      list: []
    }
    this.handleDelClick = this.handleDelClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }
  handleInputChange(e){
    let value = e.target.value;
    this.setState(()=>({
      value: value
    }))
  }
  handleBtnClick(){
    this.setState((prevState)=>({
      list: [...prevState.list,prevState.value],
      value: ''
    }))
  }
  handleDelClick(index){
    this.setState((prevState)=>{
      let list = [...prevState.list];
      list.splice(index,1);
      return {list};
    })
  }
  render() {
    const {value, list} = this.state;
    
    return (
      <Fragment>
        <label htmlFor="input">输入</label>
        <input 
              id="input"
              className="input" 
              value={value} 
              onChange={this.handleInputChange}
              ></input>
        <button onClick={this.handleBtnClick}>add</button>
        <ul>
          {list.map((item,index)=>{
            return (
              <Todoitem 
                key = {index}
                content = {item}
                index = {index}
                callback = {this.handleDelClick}
              />
            )
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
