import React, { useState, useEffect} from "react";
import styles from './cartcontrol.less';
import classnames from "classnames";

function Cartcontrol({ food }) {
  const [count, setCount] = useState(0);

  function addCart() {
    if (count === 0) {
      setCount(1);
    } else {
      setCount(count +1);
    }
  }
  function decreaseCart() {
    if (count !== 0) {
      setCount(count -1);
    }
  }
  return (
    <div className={styles.cartcontrol}>
      {count > 0 && 
      <>
      <div className={styles["cart-decrease"]}onClick={()=>decreaseCart()}>
        <span className={classnames(styles.inner,'icon-remove_circle_outline')}></span>
      </div>
      <div className={styles["cart-count"]}>{count}</div>
      </>
      }
      <div className={classnames(styles["cart-add"],'icon-add_circle')} onClick={()=>addCart()}></div>
    </div>
  );
}

export default Cartcontrol;
