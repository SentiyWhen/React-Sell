import React, { useState, useEffect, useRef } from "react";
import styles from './goods.less';
import { connect } from 'dva';
import classnames from "classnames";
import BScroll from "better-scroll";
import Shopcart from "../../components/shopcart/shopcart";

function Goods({ common }) {
  const { goods, seller } = common;
  const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  const foodListRef = useRef();
  const menuListRef = useRef();
  const [meunScroll, setMeunScroll] = useState(null);
  const [foodsScroll, setFoodsScroll] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [listHeight, setListHeight] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const scrollM = new BScroll(document.querySelector("#menu-wrapper"), {
      click: true
    });
    setMeunScroll(scrollM);

    const scrollF = new BScroll(document.querySelector("#foods-wrapper"), {
      click: true,
      probeType: 3,
    });
    setFoodsScroll(scrollF);
    scrollF.on('scroll', (pos) => {
      setScrollY(Math.abs(Math.round(pos.y)));
    })

    let foodList = foodListRef.current.children;
    let height = 0;
    let listHeight = [];
    listHeight.push(height);
    for (let i = 0; i < foodList.length; i++) {
      let item = foodList[i];
      height += item.clientHeight;
      listHeight.push(height);
    }
    setListHeight(listHeight);
    return () => {
    };
  }, [])
  
  useEffect(() => {
    for (let i = 0; i < listHeight.length; i++) {
      let height1 = listHeight[i];
      let height2 = listHeight[i + 1];
      if (!height2 || (scrollY >= height1 && scrollY < height2)) {
        let menuList = menuListRef.current.children;
        let el = menuList[i];
        meunScroll.scrollToElement(el, 300, 0, -100);
        setCurrentIndex(i);
        return;
      }
    }
    setCurrentIndex(0);
    return () => {
    };
  }, [listHeight, meunScroll, scrollY])

  function selectMenu(index) {
    setCurrentIndex(index);
    let foodList = foodListRef.current.children;
    let el = foodList[index];
    foodsScroll.scrollToElement(el, 300);
  }
  
  return (
    <div className={styles.goods}>
      <div className={styles['menu-wrapper']} id="menu-wrapper">
        { goods &&
        <ul ref={menuListRef}>
          {goods.map((item,index)=>{
            return (
              <li key={index} 
                  className={classnames(styles['menu-item'],currentIndex===index && styles.current)} 
                  onClick={() => selectMenu(index)}
              >
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
        <ul ref={foodListRef}>
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
      <Shopcart deliveryPrice={seller.deliveryPrice} minPrice={seller.minPrice}/>
    </div>
  );
}

export default connect(common => common)(Goods);
