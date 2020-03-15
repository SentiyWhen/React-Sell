import React, { useState, useEffect} from "react";
import styles from './shopcart.less';
import classnames from "classnames";

function Shopcart({ deliveryPrice,minPrice }) {
  console.log(deliveryPrice,minPrice);
  return (
    <div className={styles.shopcart}>
       <div className={styles.content}>
        <div className={styles['content-left']}>
          <div className={styles['logo-wrapper']}>
            <div className={styles.logo}>
              <i className="icon-shopping_cart"></i>
            </div>
          </div>
          <div className={styles.price}>¥0</div>
          <div className={styles.desc}>另需配送费¥{deliveryPrice}</div>
        </div>
        <div className={styles['content-right']}>
          <div className={styles.pay}>¥{minPrice}起送</div>
        </div>
       </div>
    </div>
  );
}

export default Shopcart;
