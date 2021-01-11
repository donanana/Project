import React from 'react'
import styles from './HomePage.module.scss'
import $ from "jquery";

class HomePage extends React.Component {


  render() {
      return (
        <div className={styles.homepage}>
            <header>
                <div className={styles.welcome}>WELCOME</div>
                <nav>
                    <ul>
                        <li>to</li>
                        <li>my</li>
                        <li>project !</li>
                    </ul>
                    <ul className={styles.display_in_table}>
                        <li>Made</li>
                        <li>by</li>
                        <li>Dona.</li>
                    </ul>
                </nav>
            </header>
            <section>
                <div id={styles.description} className={styles.display_in_table}>
        
                </div>
                <div id={styles.demo}>
        
                </div>
                <div id={styles.compass} >
                    <img src="/img/Doraemon.png" alt="" />
                    <p>Doraemon</p>
                </div>
            </section>
            <footer>
            <div className={styles.dock}>
                <div>
                    <img src="/img/first.png" alt=""/>
                </div>
                <div>
                    <img src="/img/second.png" alt=""/>
                </div>
                <div>
                    <img src="/img/third.png" alt=""/>
                </div>
            </div>
        </footer>
        </div>
    ) 
  }
}

export default HomePage   
