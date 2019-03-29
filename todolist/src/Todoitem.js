import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Todoitem extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    const {callback, index} = this.props;
    callback(index);
  }
  render(){
    const {content} = this.props;
    return (
      <li onClick={this.handleClick}>{content}</li>
    )
  }
}

Todoitem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number
}

Todoitem.defaultProps = {
  content: '',
  index: 0
}

export default Todoitem;