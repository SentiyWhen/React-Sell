import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, SearchWrapper, Nav, NavItem, NavSearch, Addition, Button } from './style'

const Header = (props) =>{
  return (
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch 
              className={props.focused? 'focused' :''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            >
            </NavSearch>
          </CSSTransition>
          <i className={props.focused? 'focused iconfont' :'iconfont'}>&#xe614;</i>
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

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch({
        type: 'search_focus'
      })
    },
    handleInputBlur() {
      dispatch({
        type: 'search_blur'
      })
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
