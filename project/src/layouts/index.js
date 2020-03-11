import React, { useState } from "react";
import styles from './index.less';
import Header from "../components/header/header";
import Link from 'umi/link';

function BasicLayout(props) {
  const [activeType, setaActiveType] = useState('/goods');
  const tabs = [
    { path: '/goods', name: '商品' },
    { path: '/ratings', name: '评价' },
    { path: '/seller', name: '商家' },
  ];
  return (
    <div>
      <Header></Header>
      <div className={styles.tab}>
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

export default BasicLayout;
