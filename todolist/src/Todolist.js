import React, { Component, Fragment } from 'react';
import Todoitem from './Todoitem'
import './style.css'

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
  handleClick(){
    this.setState({
      list: [...this.state.list,this.state.value],
      value: ''
    })
  }
  handleDelClick(index){
    let list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list:list
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
              onChange={(e)=>this.handleChange(e)}
              ></input>
        <button onClick={()=>this.handleClick()}>add</button>
        <ul>
          {list.map((item,index)=>{
            return (
              <Todoitem 
                key = {index}
                content = {item}
                index = {index}
                callback = {this.handleDelClick.bind(this)}
              />
            )
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
