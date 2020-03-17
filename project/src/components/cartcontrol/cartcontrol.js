import React, { useState, useEffect} from "react";
import styles from './cartcontrol.less';
import classnames from "classnames";
import { connect } from 'dva';

function Cartcontrol({ index, f_index, common, dispatch }) {
  
  const { goods } = common;
  
  function addCart() {
    let tmp = goods;
    if (tmp[index].foods[f_index].count === 0) {
      tmp[index].foods[f_index].count = 1;
    } else {
      tmp[index].foods[f_index].count += 1;
    }
    
    let foods = [];
    tmp.forEach((good) => {
      good.foods.forEach((food) => {
        if (food.count) {
          foods.push(food);
        }
      });
    });
    // console.log('foods:',foods);
    dispatch({
      type: 'common/updateState',
      paylod: {
        // goods: tmp,
        test: 'nima',
        // selectFoods: foods,
      }
    })
    // dispatch({
    //   type: 'common/updateState',
    //   paylod: {
    //     selectFoods: foods,
    //   }
    // })
  }
  function decreaseCart() {
    let tmp = goods;
    if (tmp[index].foods[f_index].count !== 0) {
      tmp[index].foods[f_index].count -= 1;
    }
    dispatch({
      type: 'common/updateState',
      paylod: {
        goods: tmp,
      }
    })
    let foods = [];
    goods.forEach((good) => {
      good.foods.forEach((food) => {
        if (food.count) {
          foods.push(food);
        }
      });
    });    
    dispatch({
      type: 'common/updateState',
      paylod: {
        selectFoods: foods,
      }
    })
  }
  return (
    <div className={styles.cartcontrol}>
      {goods[index].foods[f_index].count > 0 && 
      <>
      <div className={styles["cart-decrease"]}onClick={()=>decreaseCart()}>
        <span className={classnames(styles.inner,'icon-remove_circle_outline')}></span>
      </div>
      <div className={styles["cart-count"]}>{goods[index].foods[f_index].count}</div>
      </>
      }
      <div className={classnames(styles["cart-add"],'icon-add_circle')} onClick={addCart}></div>
    </div>
  );
}

export default connect(common => common)(Cartcontrol);
