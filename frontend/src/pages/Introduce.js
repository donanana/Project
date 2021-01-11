import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Introduce.module.scss';
import Menu from '../component/Menu';
import $ from "jquery";

const Introduce = ( props ) => {
    // console.log('props', props);
    // const [Introduces, setIntroduces] = useState([]);

    // useEffect(() => {
    //   const fetchIntroduces = async () => {
    //     const  {data}  = await axios.get('/doraemon/introduce/nobita');
    //     setIntroduces(data);
    //   };
    //   fetchIntroduces();
    // }, []);
    // console.log('Introduces', Introduces);

        return (
            <div className={styles.doraemon}>
                <div className={styles.introduce}>
                    <div className={styles.header}>
                        <div className={styles.name}>
                            <p className={styles.last_name}>野比</p>
                            <p className={styles.english_name}>Nobita</p>
                        </div>
                        <img src="/img/Doraemon/intro/suneoMain.png" alt=""/>
                        <div className={styles.line}>
                            <p className={styles.first_name}>大雄</p>
                            <hr/>
                        </div>
                        <img src="/img/Doraemon/intro/zero.png" alt="" className={styles.menu}/>
                    </div>
                    <div className={styles.data}>
                        <ul>
                            <li>生日<hr/>8月7日</li>
                            <li>星座<hr/>獅子座</li>
                            <li>身高<hr/>140 cm</li>
                            <li>體重<hr/>45kg</li>
                            <li>嗜好<hr/>翻花繩</li>
                            <li>害怕<hr/>老師</li>
                        </ul>
                        <ul className={styles.right}>
                            <li className={styles.title}>ABOUT</li>
                            <li className={styles.about}>10歲大的小學生，運動和唸書都不在行，不論做什麼事都會失敗，雖然是個很喜歡睡午覺的懶惰蟲，卻是個善解人意、心地善良的小男生。最擅長翻花繩與射擊。</li>
                            <li><img src="img/Doraemon/thing/thing.png" alt=""/></li>
                        </ul>
                    </div>
                </div>
                <Menu/>
            </div>
        )
}

// class Introduce extends React.Component {
//     render () {
//       const name = this.props.match.params.name;
//       return (
//           <div>
//         user id: {name}
//           </div>
//     )
//     }
//   }


export default Introduce                                                                                                                  