import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './People.module.scss'
import Menu from '../component/Menu';
import $ from "jquery";
import {Link} from 'react-router-dom';

// class People extends React.Component {
const People = ( props ) => {
    console.log('props', props);
    const [People, setPeople] = useState([]);

    useEffect(() => {
      const fetchPeople = async () => {
        const { data } = await axios.get(`${props.match.url}`);
        setPeople(data);
      };
      fetchPeople();
    }, []);

    console.log('People', People);

        return (
            <div className={styles.doraemon}>
                <div className={styles.people} id={styles.home}>
                    <div className={styles.navbar}>
                        <ul>
                            <li><Link to="/doraemon/people/future">來自22世紀</Link></li>
                            <li><Link to="/doraemon/people/nobita">大雄家</Link></li>
                            <li><Link to="/doraemon/people/shizuka">靜香家</Link></li>
                            <li><img src="/img/doraemon/people/people.png" alt="" onclick="goRight()"/></li>
                            <li><Link to="/doraemon/people/gian">胖虎家</Link></li>
                            <li><Link to="/doraemon/people/suneo">小夫家</Link></li>
                            <li className={styles.none}><Link to="./doraemon/people/other">學校＆其他</Link></li>
                        </ul>
                    </div>
                    
                    <div className={styles.two_items}>
                        <div className={styles.team}>
                            <p>哆啦Ａ夢</p>
                            <img src="/img/Doraemon/people/doraemon.png" alt=""/>
                        </div>
                        
                        <div className={`${styles.team} ${styles.none}`}>
                            <p>大雄</p>
                            <img src="/img/Doraemon/people/nobita.png" alt=""/>
                        </div>
                    </div>
    
                    <div className={styles.three_items}>
    
                        <div className={styles.team}>
                            <p>靜香</p>
                            <img src="/img/Doraemon/people/shizuka.png" alt=""/>
                        </div>
    
                        <div className={styles.team}>
                            <p>小夫</p>
                            <img src="/img/Doraemon/people/suneo.png" alt=""/>
                        </div>
    
                        <div className={`${styles.team} ${styles.none}`}>
                            <p>胖虎</p>
                            <img src="/img/Doraemon/people/gian.png" alt=""/>
                        </div>
    
                        <div className={styles.team}>
                            <p>大雄媽媽</p>
                            <img src="/img/Doraemon/people/nobitaMa.png" alt=""/>
                        </div>
    
                        <div className={styles.team}>
                            <p>大雄爸爸</p>
                            <img src="/img/Doraemon/people/nobitaFa.png" alt=""/>
                        </div>
    
                        <div className={`${styles.team} ${styles.none}`}>
                            <p>哆啦美</p>
                            <img src="/img/Doraemon/people/dorami.png" alt=""/>
                        </div>
    
                    </div>
    
                    <div className={styles.four_items}>
                        <div className={styles.team}>
                            <p>胖虎媽媽</p>
                            <img src="/img/Doraemon/people/gianMa.png" alt=""/>
                        </div>
    
                        <div className={styles.team}>
                            <p>靜香媽媽</p>
                            <img src="/img/Doraemon/people/shizukaMa.png" alt=""/>
                        </div>
    
                        <div className={styles.team}>
                            <p>小夫媽媽</p>
                            <img src="/img/Doraemon/people/suneoMa.png" alt=""/>
                        </div>
    
                        <div className={`${styles.team} ${styles.none}`}>
                            <p>胖虎妹妹</p>
                            <img src="/img/Doraemon/people/gianSis.png" alt=""/>
                        </div>
    
                        <div className={styles.team}>
                            <p>老師</p>
                            <img src="/img/Doraemon/people/teacher.png" alt=""/>
                        </div>
    
                        <div className={styles.team}>
                            <p>出木杉</p>
                            <img src="/img/Doraemon/people/dekisugi.png" alt=""/>
                        </div>
    
                        <div className={styles.team}>
                            <p>雷公</p>
                            <img src="/img/Doraemon/people/kaminari.png" alt=""/>
                        </div>
    
                        <div className={`${styles.team} ${styles.none}`}>
                            <p>世修</p>
                            <img src="/img/Doraemon/people/sewashi.png" alt=""/>
                        </div>
    
                        <div className={styles.team}>
                            <p>胖虎爸爸</p>
                            <img src="/img/Doraemon/people/gianFa.png" alt=""/>
                        </div>
    
                        <div className={styles.team}>
                            <p>小夫爸爸</p>
                            <img src="/img/Doraemon/people/suneoFa.png" alt=""/>
                        </div>
    
                        <div className={styles.team}>
                            <p>靜香爸爸</p>
                            <img src="/img/Doraemon/people/shiziFa.png" alt=""/>
                        </div>
    
                        <div className={`${styles.team} ${styles.none}`}>
                            <p>廠長</p>
                            <img src="/img/Doraemon/people/kojocho.png" alt=""/>
                        </div>
    
                        <div className={styles.team}>
                            <p>帕瓦Ａ夢</p>
                            <img src="/img/Doraemon/people/poweremon.png" alt=""/>
                        </div>
                        
                        <div className={`${styles.team} ${styles.large}`}>
                            <p>迷你哆啦</p>
                            <img src="/img/Doraemon/people/miniDora.png" alt="" />
                        </div>
    
                        <div className={`${styles.team} ${styles.none}`}>
                            <p>哆啦咪子</p>
                            <img src="/img/Doraemon/people/noramyaako.png" alt=""/>
                        </div>
                    </div>    
                </div>
                <Menu/>
            </div>
        )
}

export default People