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
        <input value={value} onChange={(e)=>this.handleChange(e)}></input>
        <button onClick={()=>this.handleClick()}>add</button>
        <ul>
          {list.map((item,index)=>{
            return <li key={index} onClick={this.handleDelClick.bind(this,index)}>{item}</li>
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
