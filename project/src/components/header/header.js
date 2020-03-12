import React, {useState} from "react";
import styles from './header.less';
import classnames from "classnames";
// import { CSSTransition } from 'react-transition-group';
import Star from "../star/star";

function Header(data) {
  const { seller } = data;
  const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  const [detailShow, setdetailShow] = useState(false)

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
          { seller.supports &&
          <div className={styles.support}>
            <span className={classnames(styles.icon,styles[classMap[seller.supports[0].type]])}></span>
            <span className={styles.text}>{seller.supports[0].description}</span>
          </div>
          }
        </div>
        { seller.supports &&
        <div className={styles.support_count} onClick={()=>setdetailShow(!detailShow)}>
          <span className={styles.count}>{seller.supports.length}个</span>
          <i className="icon-keyboard_arrow_right"></i>
        </div>
        }
      </div>
      <div className={styles.bulletin_wrapper} onClick={()=>setdetailShow(!detailShow)}>
        <span className={styles.bulletin_title}></span>
        <span className={styles.bulletin_text}>{seller.bulletin}</span>
        <i className="icon-keyboard_arrow_right"></i>
      </div>
      <div className={styles.background}>
        <img alt="" src={seller.avatar}></img>
      </div>
      {/* <CSSTransition
            in={detailShow} // 如果this.state.show从false变为true，则动画入场，反之out出场
            timeout={1000} //动画执行1秒
            classNames='fade' //自定义的class名
            unMountOnExit //可选，当动画出场后在页面上移除包裹的dom节点
            onEntered={(el) => {
              // el.style.color='blue'   //可选，动画入场之后的回调，el指被包裹的dom，让div内的字体颜色等于蓝色
            }}
            onExited={() => {
              //同理，动画出场之后的回调，也可以在这里来个setState啥的操作
            }}
            
      > */}
      {detailShow && 
      <div className={styles.detail}>
        <div className={classnames(styles.detail_wrapper,'clearfix')}>
          <div className={styles.detail_main}>
            <h1 className={styles.name}>{seller.name}</h1>
            <div className={styles.star_wrapper}>
              <Star size={48} score={seller.score}/>
            </div>
            <div className={styles.title}>
              <div className={styles.line}></div>
              <div className={styles.text}>优惠信息</div>
              <div className={styles.line}></div>
            </div>
            { seller.supports &&  
            <ul className={styles.support}>
              {seller.supports.map((item,index)=>{
                return (
                  <li key={index} className={styles['support-item']}>
                    <span className={classnames(styles.icon,styles[classMap[item.type]])} ></span>
                    <span className={styles.text}>{seller.supports[index].description}</span>
                  </li>
                )
              })}
            </ul>
            }
            <div className={styles.title}>
              <div className={styles.line}></div>
              <div className={styles.text}>商家公告</div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.bulletin}>
              <p className={styles.content}>{seller.bulletin}</p>
            </div>
          </div>
        </div>
        <div className={styles.detail_close} onClick={()=>setdetailShow(!detailShow)}>
          <i className="icon-close"></i>
        </div>
      </div>
      }
      {/* </CSSTransition> */}
    </div>
  );
}

export default Header;
