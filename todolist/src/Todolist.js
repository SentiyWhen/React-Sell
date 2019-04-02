import React, { Component, Fragment } from 'react';
import { addListAction, delItemAction, inputChangeAction } from './store/actionCreators'
import Todoitem from './Todoitem';
import store from './store'
import './style.css';

class Todolist extends Component {
  constructor(props){
    super(props);
    //state&props发生变化 render会重新执行 渲染界面
    //父组件的render执行时，子组件的render也会执行
    this.state = store.getState();
    this.handleDelClick = this.handleDelClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleAnimationClick = this.handleAnimationClick.bind(this);
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }
  storeChange() {
    this.setState(store.getState());
  }
  handleAnimationClick(){
    this.setState(()=>({
      show : this.state.show ? false : true
    }))
  }
  handleInputChange(e){
    const action = inputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleBtnClick(){
    const action = addListAction();
    store.dispatch(action);
  }
  handleDelClick(index){
    const action = delItemAction(index);
    store.dispatch(action);
  }
  render() {
    const {value, list, show} = this.state;
    
    return (
      <Fragment>
        <div className={show? 'show' : 'hide'}>lai</div>
        <button onClick={this.handleAnimationClick}>动画测试</button>
        <br/>
        <label htmlFor="input">输入</label>
        <input 
              id="input"
              className="input" 
              value={value} 
              onChange={this.handleInputChange}
              ></input>
        <button onClick={this.handleBtnClick}>add</button>
        <ul ref={(ul)=>{this.ul = ul}}>
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
