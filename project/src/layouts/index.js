import React from 'react';
import styles from './index.less';
import Header from "../components/header/header";
import Link from 'umi/link';
import { connect } from 'dva';
import classnames from "classnames";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeType: '/goods',
    }
  }
  componentDidMount() {
    this.props.dispatch({ type: 'common/getSeller'})
  }
  setActiveType(activeType){
    this.setState({
      activeType,
    })
  }

  render() {
    const { seller } = this.props.common;
    
    const tabs = [
      { path: '/goods', name: '商品' },
      { path: '/ratings', name: '评价' },
      { path: '/seller', name: '商家' },
    ];
    return (
      <div>
        <Header seller={seller}/>
        <div className={classnames(styles.tab,styles.border_1px)}>
        { tabs.map((item, index) => {
            return (
              <div key={index} className={styles.tab_item} onClick={this.setActiveType.bind(this,item.path)}>
                <Link to={item.path} className={ this.state.activeType === item.path ? styles.active : ''}>{item.name}</Link>
              </div>
            )
        })}
      </div>
        {this.props.children}
      </div>
    );
  }
}

export default connect(common => common)(App);
