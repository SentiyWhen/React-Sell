import React, { Component} from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store';
import {
  HeaderWrapper, 
  Logo, 
  SearchWrapper, 
  Nav, 
  NavItem, 
  SearchInfo,
  SearchInfoTitle, 
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  NavSearch, 
  Addition, 
  Button
} from './style'

class Header extends Component {
  getListArea() {
    const { focused, list } = this.props;
    if (focused) {
      return <SearchInfo>
                <SearchInfoTitle>
                  热门搜索
                  <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                  {
                    list.map((item)=>{
                      return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                    })
                  }
                </SearchInfoList>
              </SearchInfo>
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch 
                className={focused? 'focused' :''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={focused? 'focused iconfont' :'iconfont'}>&#xe614;</i>
            {this.getListArea()}
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list'])

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
