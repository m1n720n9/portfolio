import './style/kocca.scss'
import ico_clock from './img/ico_clock.png'
import ico_pro from './img/ico_pro.png'

const Kocca = () => {
  return(
    <section id='kocca'>
      <div className="color_box">
        <div className='title'>
          <h2>한국콘텐츠진흥원
          <a href='https://github.com/m1n720n9/kocca' target='_blank'><img className='skill_logo' src={require('./img/logo_github.png')} /></a>
          </h2>
        </div>
        <div className='text'>
          <ul>
            <li>HTML, CSS, JQuery 기본기를 익히기 위해 만든 관공서 웹 페이지</li>
            <li>웹 표준 및 웹 접근성을 고려한 마크업</li>
            <li>JQuery를 이용하여 슬라이드 및 탭 구현</li>
            <li>9개의 서브페이지 제작</li>
          </ul>
          <p><img src={ico_pro}/> 사용 기술 : HTML CSS JQuery</p>
          <p><img src={ico_clock}/> 제작 기간 : 1개월</p>
          <div className='skills'>
            <img className='skill_logo' src={require("./img/logo_html.png")} />
            <img className='skill_logo' src={require('./img/logo_css.png')} />
            <img className='skill_logo' src={require('./img/logo_jquery.png')} />
          </div>
        </div>      
      </div>
      <div className="flow_img">
        <a href="https://m1n720n9.github.io/kocca/" target='_blank'><img src={require('./img/kocca_flow.png')} /></a>
        <span>CLICK TO GO TO PAGE &rarr;</span>
      </div>  
    </section>
  )
}

export default Kocca;