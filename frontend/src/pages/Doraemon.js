import React from 'react';
import styles from './Doraemon.module.scss';
import Menu from '../component/Menu';
import $ from "jquery";
import {Link} from 'react-router-dom';

class Doraemon extends React.Component {
    goLeft(){ 
        $('html, body').animate({
          scrollLeft: $('#home').offset().left
        }, 700);
      }
      render(){
        return (
            <div className={styles.doraemon}>
                <div className={styles.home_page} id={styles.home}>
                    <div className={styles.menu}>
                        <p>Doraemon</p>
                        <img src="/img/Doraemon/home/toMenu.png" alt="" onclick="goRight()"/>
                    </div>
                    <div className={styles.main}>
                        <Link to="/doraemon/introduce/suneo">
                            <img src="/img/Doraemon/home/suneo.png" alt=""/>
                        </Link>
                        <Link to="/doraemon/introduce/shizuka">
                            <img src="/img/Doraemon/home/shizuka.png" alt=""/>
                        </Link>
                        <Link to="/doraemon/introduce/doraemon">
                            <img src="/img/Doraemon/home/doraemon.png" alt=""/>
                        </Link>
                        <Link to="/doraemon/introduce/nobita">
                            <img src="/img/Doraemon/home/nobita.png" alt=""/>
                        </Link>
                        <Link to="/doraemon/introduce/gian">
                            <img src="/img/Doraemon/home/gian.png" alt=""/>
                        </Link>
                    </div>
                </div>
                <Menu/>
        </div>
        )
      }
}


export default Doraemon                                                                                                                  