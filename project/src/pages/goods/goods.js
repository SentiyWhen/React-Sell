import React, { useState, useEffect } from "react";
import styles from './goods.less';
import { connect } from 'dva';
import classnames from "classnames";
import BScroll from "better-scroll";

function Goods({ common }) {
  const { goods } = common;
  const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  const [meunScroll, setMeunScroll] = useState(null);
  const [foodsScroll, setFoodsScroll] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      _initScroll();
    }, 0);
    return () => {
    };
  }, [])
  function _initScroll() {
    const scrollM = new BScroll(document.querySelector("#menu-wrapper"), {
      click: true
    });
    setMeunScroll(scrollM);
    const scrollF = new BScroll(document.querySelector("#foods-wrapper"), {
      click: true
    });
    setFoodsScroll(scrollF);
  }
  
  return (
    <div className={styles.goods}>
      <div className={styles['menu-wrapper']} id="menu-wrapper">
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
      <div className={styles['foods-wrapper']} id="foods-wrapper">
        <ul>
          {goods.map((item,index)=>{
            return (
              <li key={index}>
                <h1 className={styles.title}>{item.name}</h1>
                <ul>
                  {item.foods.map((food,f_index)=>{
                    return (
                      <li key={f_index} className={styles['food-item']}>
                        <div className={styles.icon}>
                          <img alt="" style={{width:57,height:57}} src={food.icon}></img>
                        </div>
                        <div className={styles.content}>
                          <h2 className={styles.name}>{food.name}</h2>
                          <p className={styles.desc}>{food.description}</p>
                          <div className={styles.extra}>
                            <span className={styles.count}>月售{food.sellCount}份</span>
                            <span>好评率{food.rating}%</span>
                          </div>
                          <div className={styles.price}>
                            <span className={styles.now}>￥{food.price}</span>
                            {food.oldPrice &&
                            <span className={styles.old}>￥{food.oldPrice}</span>
                            }
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </li>
              
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default connect(common => common)(Goods);
