import React, { useState, useEffect} from "react";
import styles from './star.less';
import classnames from "classnames";

function Star({size, score}) {

  const [itemClasses, setitemClasses] = useState([]);
  const [starType, setstarType] = useState('');

  useEffect(() => {
    const LENGTH = 5;
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';

    let result = [];
    let score_L = Math.floor(score * 2) / 2;
    let hasDecimal = score_L % 1 !== 0;
    let integer = Math.floor(score_L);
    for (let i = 0; i < integer; i++) {
      result.push(CLS_ON);
    }
    if (hasDecimal) {
      result.push(CLS_HALF);
    }
    while (result.length < LENGTH) {
      result.push(CLS_OFF);
    }
    setitemClasses(result);
    setstarType('star-'+size);
    return () => {
    };
  }, [score, size])
  
  return (
    <div className={classnames(styles.star,styles[starType])}>
       {itemClasses.map((item,index)=>{
         return <span key={index} className={classnames(styles['star-item'],styles[item])}></span>
       })}
    </div>
  );
}

export default Star;
