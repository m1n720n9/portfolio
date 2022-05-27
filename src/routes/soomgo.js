import './style/soomgo.scss'
import ico_clock from './img/ico_clock.png'
import ico_pro from './img/ico_pro.png'
const Soomgo = () => {
  return(
    <section id='soomgo'>
     <div className="color_box">
        <div className='title'>
          <h2>숨고
          <a href='https://github.com/m1n720n9/Soomgo' target='_blank'><img className='skill_logo' src={require('./img/logo_github.png')} /></a>
          </h2>
        </div>
        <div className='text'>
          <ul>
            <li>PC, Tablet, Mobile 반응형 웹페이지 제작</li>
            <li>flex box와 Media Query 연습</li>
            <li>Swiper.js를 이용하여 슬라이드 및 탭 구현</li>
          </ul>
          <p><img src={ico_pro}/> 사용 기술 : HTML CSS JavaScript</p>
          <p><img src={ico_clock}/> 제작 기간 : 4일</p>
          <div className='skills'>
            <img className='skill_logo' src={require("./img/logo_html.png")} />
            <img className='skill_logo' src={require('./img/logo_css.png')} />
            <img className='skill_logo' src={require('./img/logo_js.png')} />
          </div>
        </div>      
      </div>
      <div className="flow_img">
        <a href="https://m1n720n9.github.io/Soomgo/" target='_blank'><img src={require('./img/soomgo_flow_tnm.png')} /></a>
        <span>CLICK TO GO TO PAGE &rarr;</span>
      </div>
      
    </section>
  )
}

export default Soomgo;