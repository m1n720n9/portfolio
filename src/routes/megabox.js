import './style/megabox.scss'
import ico_clock from './img/ico_clock.png'
import ico_pro from './img/ico_pro.png'

const Megabox = () => { 
  return(
    <section id='megabox'>
      <div className="color_box">
        <div className='title'>
          <h2>메가박스
          <a href='https://github.com/m1n720n9/megabox' target='_blank'><img className='skill_logo' src={require('./img/logo_github.png')} /></a>
          </h2>
        </div>
        <div className='text'>
          <ul>
            <li>Vanilla JavaScript를 사용하여 만든 클론 코딩</li>
            <li>Swiper.js를 이용하여 슬라이드 및 탭 구현</li>
            <li className='issue'>click event 사용시 동시 적용</li>
          </ul>
          <p><img src={ico_pro}/> 사용 기술 : HTML CSS JavaScript</p>
          <p><img src={ico_clock}/> 제작 기간 : 2주</p>
          <div className='skills'>
            <img className='skill_logo' src={require("./img/logo_html.png")} />
            <img className='skill_logo' src={require('./img/logo_css.png')} />
            <img className='skill_logo' src={require('./img/logo_js.png')} />
          </div>
        </div>      
      </div>
      <div className="flow_img">
        <a href="https://m1n720n9.github.io/megabox/" target='_blank'><img src={require('./img/megabox_flow.png')} /></a>
        <span>CLICK TO GO TO PAGE &rarr;</span>
      </div>
    </section>
  )
}

export default Megabox;

