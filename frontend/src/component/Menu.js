import React from 'react';
import styles from './Menu.module.scss';
import $ from "jquery";
import {Link} from 'react-router-dom';

const Menu = () => {
    function goLeft(){ 
        $('html, body').animate({
          scrollLeft: $('#home').offset().left
        }, 700);
      }

    return (
        <div className={styles.menu_page} id={styles.menu}>
            <div className={styles.bell}>
                <hr className={styles.lineTop} size="6" color="#0000"/>
                <img src="/img/Doraemon/menu/bell.png" alt=""/>
                <hr className={styles.lineTop} size="6" color="#0000"/>
            </div>
            <div className={styles.thing}>
                <div>
                    <Link to="index.html">
                        <img src="/img/Doraemon/menu/fly.png" alt=""/>
                        <p>退出</p>
                    </Link>
                </div>
                <div>
                    <Link to="doraemon.html">
                        <img src="/img/Doraemon/menu/anyDoor.png" alt=""/>
                        <p>回首頁</p>
                    </Link>
                </div>
                <div>
                    <Link to="people.html">
                        <img src="/img/Doraemon/menu/toast.png" alt=""/>
                        <p>角色列表</p>
                    </Link>
                </div>
                <div onclick="goLeft()">
                    <img src="/img/Doraemon/menu/damn.png" alt=""/>
                    <p>算了、算了</p>
                </div>
            </div>
        </div>            
    )
}


export default Menu                                                                                                                  