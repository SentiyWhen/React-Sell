import React from "react";
import styles from './header.less';
import classnames from "classnames";

function Header(data) {
  const { seller } = data;
  const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  // if (seller.supports) {
  //   console.log(classMap[`${seller.supports[0].type}`]);
  // }

  return (
    <div className={styles.header}>
      <div className={styles.content_wrapper}>
        <div className={styles.avatar}>
          <img alt="" src={seller.avatar}></img>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <span className={styles.brand}></span>
            <span className={styles.name}>{seller.name}</span>
          </div>
          <div className={styles.description}>
            {seller.description}/{seller.deliveryTime}分钟送达
          </div>
          { seller.supports ?
          <div className={styles.support}>
            <span className={classnames(styles.icon,styles.decrease)}></span>
            <span className={styles.text}>{seller.supports[0].description}</span>
          </div>
          : null }
        </div>
      </div>
      <div className={styles.bulletin_wrapper}>

      </div>
    </div>
  );
}

export default Header;
