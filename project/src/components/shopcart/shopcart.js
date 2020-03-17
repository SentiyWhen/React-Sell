import React, { useState, useEffect} from "react";
import { connect } from "dva";
import styles from './shopcart.less';
import classnames from "classnames";

function Shopcart({ deliveryPrice, minPrice, common }) {
  console.log('selectFoods:',common);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [payDesc, setPayDesc] = useState('');

  // useEffect(() => {
  //   let selectFoods = [];
  //   let total = 0;
  //   let count = 0;
  //   let desc = '';
  //   selectFoods.forEach((food) => {
  //     total += food.price * food.count;
  //     count += food.count;
  //   });
  //   if (total === 0) {
  //     desc = `￥${minPrice}元起送`;
  //   } else if (total < minPrice) {
  //     let diff = minPrice - total;
  //     desc = `还差￥${diff}元起送`;
  //   } else {
  //     desc = '去结算';
  //   }
  //   setTotalPrice(total);
  //   setTotalCount(count);
  //   setPayDesc(desc);
  //   return () => {
  //   };
  // }, [minPrice])

  


  return (
    <div className={styles.shopcart}>
       <div className={styles.content}>
        <div className={styles['content-left']}>
          <div className={styles['logo-wrapper']}>
            <div className={classnames(styles.logo, totalCount>0 && styles.highlight)}>
              <i className={classnames("icon-shopping_cart", totalCount>0 && 'highlight')}></i>
            </div>
            {totalCount>0 &&
            <div className={styles.num}>{totalCount}</div>
            }
          </div>
          <div className={classnames(styles.price, totalPrice>0 && styles.highlight)}>¥{totalPrice}</div>
          <div className={styles.desc}>另需配送费¥{deliveryPrice}</div>
        </div>
        <div className={styles['content-right']}>
          <div className={classnames(styles.pay,totalPrice<minPrice ? styles['not-enough']: styles['enough'])}>{payDesc}</div>
        </div>
       </div>
    </div>
  );
}

export default connect(common => common)(Shopcart);
