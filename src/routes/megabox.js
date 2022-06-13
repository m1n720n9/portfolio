import './style/megabox.scss'
import ico_clock from './img/ico_clock.png'
import ico_pro from './img/ico_pro.png'

const Megabox = () => { 
  return(
    <section id='megabox'>
      <div className="color_box">
        <div className='title'>
          <h2>메가박스
          <a href='https://github.com/m1n720n9/megabox' target='_blank' rel="noreferrer"><img className='skill_logo' src={require('./img/logo_github.png')} alt='git logo' /></a>
          </h2>
        </div>
        <div className='text'>
          <ul>
            <li>Vanilla JavaScript를 사용하여 만든 메가박스 클론 코딩</li>
            <li>Swiper.js를 이용하여 슬라이드 구현</li>
            <li>함수형 코드로 중복된 코드 개선</li>
            <li className='browser'>Cross Browsing (Chrome, Firefox)</li>
          </ul>
          <p><img src={ico_pro} alt='icon'/> 사용 기술 : HTML CSS JavaScript</p>
          <p><img src={ico_clock} alt='icon'/> 제작 기간 : 2주</p>
          <div className='skills'>
            <img className='skill_logo' src={require("./img/logo_html.png")} alt='icon' />
            <img className='skill_logo' src={require('./img/logo_css.png')} alt='icon' />
            <img className='skill_logo' src={require('./img/logo_js.png')} alt='icon' />
          </div>
        </div>      
      </div>
      <div className="flow_img">
        <a href="https://m1n720n9.github.io/megabox/" target='_blank' rel="noreferrer"><img src={require('./img/megabox_flow.png')} alt='page capture' /></a>
        <span>CLICK TO GO TO PAGE &rarr;</span>
      </div>
    </section>
  )
}

export default Megabox;

