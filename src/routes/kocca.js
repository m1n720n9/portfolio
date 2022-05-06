import { Link } from 'react-router-dom';
import './style/kocca.scss'

const Kocca = () => {
  return(
    <section id='kocca'>
      <div className="color_box">
        <div className='text'>
          <h2>한국콘텐츠진흥원</h2>
          <p>HTML, CSS, JQuery를 이용하여 제작한 관공서 클론 코딩 </p>
          <div className='skills'>
            <img className='skill_logo' src={require("./img/logo_html.png")} />
            <img className='skill_logo' src={require('./img/logo_css.png')} />
            <img className='skill_logo' src={require('./img/logo_jquery.png')} />
          </div>
          <div className='link'>
            <a href='https://github.com/m1n720n9/kocca' target='_blank'><img className='skill_logo' src={require('./img/logo_github.png')} /></a>
          </div>
        </div>        
      </div>
      <div className="flow_img">
        <a href="https://m1n720n9.github.io/kocca/" target='_blank'><img src={require('./img/kocca_flow.png')} /></a>
      </div>
      
    </section>
  )
}

export default Kocca;