import React, { useState, useEffect } from "react";
import styles from './goods.less';
import { connect } from 'dva';
import classnames from "classnames";

function Goods({ common }) {
  const { goods } = common;
  const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

  
  return (
    <div className={styles.goods}>
      <div className={styles['menu-wrapper']}>
        { goods &&
        <ul>
          {goods.map((item,index)=>{
            return (
              <li key={index} className={styles['menu-item']}>
                <span className={classnames(styles.text,'border_1px')}>
                  { item.type>0 && 
                    <span className={classnames(styles.icon,styles[classMap[item.type]])}></span>
                  }
                  {item.name}
                </span>
              </li>
            )
          })}
        </ul>
        }
      </div>
      <div className={styles['foods-wrapper']}>
      </div>
    </div>
  );
}

export default connect(common => common)(Goods);
