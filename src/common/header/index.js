import React, { Component } from 'react'
import { HeaderWrapper, Logo, SearchWrapper, Nav, NavItem, NavSearch, Addition, Button } from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <SearchWrapper>
            <NavSearch></NavSearch>
            <i className="iconfont">&#xe614;</i>
          </SearchWrapper>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <Addition>
            <Button className='writting'><i className="iconfont">&#xe615;</i>写文章</Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
}

export default Header
