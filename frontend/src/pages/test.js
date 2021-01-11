import React from 'react'
import styles from './HomePage.module.scss'
import $ from "jquery";
// import {Link} from 'react-router-dom';

function demo(index) {
  var p = document.getElementById('demo');
  var p2 = document.getElementById('description');

  switch (index) {
    case 1:
      p.innerHTML = `
          <div className="demo">
            <span className="close">✘</span>
            <Link to="https://donanana.github.io/first-project/" target="_blank">
                <span className="iconify" data-icon="clarity:pop-out-line"></span>
            </a>
            <iframe className="frame" src="https://donanana.github.io/first-project/"></iframe>
          </div>
          `;

      p2.innerHTML = `
        <div className="description">
          <span className="close">✘</span>
            <div className="content">
                <h2>這是我的第一個網頁作品，那時還是初學者，技術不是很純熟，參考多個現成的bootstrap模板，拼拼湊湊出自己想要的網頁架構，內有自我介紹、課堂練習作品、課表以及一些可愛的元素</h2>
            </div>
        </div>
        `;
      break;

    case 2:
      p.innerHTML = `
        <div className="demo">
            <span className="close">✘</span>
            <Link to="https://donanana.github.io/API-project/" target="_blank">
                <span className="iconify" data-icon="clarity:pop-out-line"></span>
            </a>
            <iframe className="frame" src="https://donanana.github.io/API-project/"></iframe>
        </div>
        `;

      p2.innerHTML = `
        <div className="description">
          <span className="close">✘</span>
            <div className="content">
                <h2>這是我學習javascript後實作的作品，外觀上比較簡約，著重在功能的呈現，內容包含猜拳、打怪獸、圈圈叉叉的遊戲，以及影音層面的音樂影片播放器及利用Genius API做的歌曲搜尋系統。</h2>
            </div>
        </div>
        `;
      break;

    case 3:
      p.innerHTML = `
        <div className="demo">
            <span className="close">✘</span>
            <Link to="https://donanana.github.io/demo/" target="_blank">
                <span className="iconify" data-icon="clarity:pop-out-line"></span>
            </a>
            <iframe className="frame" src="https://donanana.github.io/demo/"></iframe>
        </div>
        `;

      p2.innerHTML = `
        <div className="description">
          <span className="close">✘</span>
            <div className="content">
                <h2>這個作品的概念是希望把不錯的小作品，像畫廊展示作家作品集一樣呈現在網頁上，模板跟所有背景圖都是自己用figma創作的，使用React框架來撰寫，算是個不管樣貌或架構都有所突破的作品。</h2>
            </div>
        </div>
        `;
      break;
  }

  $('.close').click(function () {
    $('.demo').hide();
    $('.description').hide();
  });
}

function goDoraemon() {
setTimeout(function () {
  $('.demo').hide();
  $('.description').hide();
  $('footer').fadeOut();
  setTimeout(function () {
    $('header').fadeOut();
    setTimeout(function () {
      window.location.href="doraemon.html";
      // setTimeout(function () {
      // $('html,body').animate({ scrollTop: $('.compass').offset().top }, 700);
      // }, 1000);
    }, 600);
  }, 400);
}, 100);
}

const HomePage = () => {
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
                    <img src="/img/Doraemon.png" alt="" onclick="goDoraemon()"/>
                    <p>Doraemon</p>
                </div>
            </section>
            <footer>
            <div className={styles.dock}>
                <div onclick="demo(1)">
                    <img src="/img/first.png" alt=""/>
                </div>
                <div onclick="demo(2)">
                    <img src="/img/second.png" alt=""/>
                </div>
                <div onclick="demo(3)">
                    <img src="/img/third.png" alt=""/>
                </div>
            </div>
        </footer>
        </div>
    ) 
}

export default HomePage   
