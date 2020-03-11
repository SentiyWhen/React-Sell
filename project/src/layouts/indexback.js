import React, { useState, useEffect } from "react";
import styles from './index.less';
import Header from "../components/header/header";
import Link from 'umi/link';
import { connect } from 'dva';
import classnames from "classnames";

function BasicLayout(props) {
  console.log(props);
  
  const { dispatch } = props;
  
  const [activeType, setaActiveType] = useState('/goods');
  const tabs = [
    { path: '/goods', name: '商品' },
    { path: '/ratings', name: '评价' },
    { path: '/seller', name: '商家' },
  ];
  useEffect(() => {
    // dispatch ({ type: 'common/getSeller'})
    return () => {
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Header></Header>
      <div className={classnames(styles.tab,styles.border_1px)}>
      { tabs.map((item, index) => {
          return (
            <div key={index} className={styles.tab_item} onClick={() => setaActiveType(item.path)}>
              <Link to={item.path} className={ activeType === item.path ? styles.active : ''}>{item.name}</Link>
            </div>
          )
      })}
    </div>
      {props.children}
    </div>
  );
}

export default  connect(common => common)(BasicLayout);
