import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store';

class Detail extends Component {
  render() {
    return(
      <DetailWrapper>
        <Header>jaychou</Header>
        <Content>
        jaychou
        </Content>
      </DetailWrapper>
    )
  }
}

export default Detail