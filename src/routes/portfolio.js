import './style/portfolio.scss'
import ico_clock from './img/ico_clock.png'
import ico_pro from './img/ico_pro.png'

const Portfolio = () => {
  return(
    <section id='portfolio'>
      <div className="color_box">
        <div className='title'>
          <h2>Portfolio
          <a href='https://github.com/m1n720n9/portfolio' target='_blank' rel="noreferrer"><img className='skill_logo' src={require('./img/logo_github.png')} alt='git logo' /></a>
          </h2>
        </div>
        <div className='text'>
          <ul>
            <li>React.js를 기반으로 만든 개인 포트폴리오 웹 페이지</li>
            <li>react-router-dom</li>
            <li>Page Scroll Event ( react-full-page )</li>
            <li>React library를 활용하여 동적인 페이지 제작 ( react-transition-group, react-text-loop )</li>
          </ul>
          <p><img src={ico_pro} alt='icon'/> 사용 기술 : React Sass</p>
          <p><img src={ico_clock} alt='icon'/> 제작 기간 : 1개월</p>
          <div className='skills'>
            <img className='skill_logo' src={require("./img/logo_react.png")} alt='icon' />
            <img className='skill_logo' src={require('./img/logo_sass.png')} alt='icon' />
          </div>
        </div>      
      </div>
      <div className="flow_img">
        <a href="https://m1n720n9.github.io/portfolio/" target='_blank' rel="noreferrer"><img src={require('./img/portfolio_flow.png')} alt='page capture' /></a>
        <span>CLICK TO GO TO PAGE &rarr;</span>
      </div>
    </section>
  )
}

export default Portfolio;