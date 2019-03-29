import React,{Component} from 'react';

class Todoitem extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.callback(this.props.index);
  }
  render(){
    const {content} = this.props;
    return (
      <li onClick={this.handleClick}>{content}</li>
    )
  }
}

export default Todoitem;