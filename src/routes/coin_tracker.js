import './style/coin_tracker.scss'
import ico_clock from './img/ico_clock.png'
import ico_pro from './img/ico_pro.png'

const CoinTracker = () => {
  return(
    <section id='coin_tracker'>
      <div className="color_box">
        <div className='title'>
          <h2>Coin Tracker
          <a href='https://github.com/m1n720n9/cryptocurrency_tracker' rel="noreferrer" target='_blank'><img className='skill_logo' src={require('./img/logo_github.png')} alt='git_logo' /></a>
          </h2>
        </div>
        <div className='text'>
          <ul>
            <li>React.js를 기반으로 만든 암호화폐 시세 트래커</li>
            <li>React Query를 이용한 Crypto Price API fetching</li>
            <li>Styled Components으로 스타일링</li>
            <li>Apex Charts를 활용하여 암호화폐 시세 변화 데이터를 시각화</li>
          </ul>
          <p><img src={ico_pro} alt='icon' /> 사용 기술 : React TypeScript</p>
          <p><img src={ico_clock} alt='icon'/> 제작 기간 : 1개월</p>
          <div className='skills'>
            <img className='skill_logo' src={require("./img/logo_react.png")} alt='icon' />
            <img className='skill_logo' src={require('./img/logo_ts.png')} alt='icon' />
          </div>
        </div>      
      </div>
      <div className="flow_img">
        <a href="https://m1n720n9.github.io/cryptocurrency_tracker/" rel="noreferrer" target='_blank'><img src={require('./img/coin_flow.png')} alt='page capture' /></a>
        <span>CLICK TO GO TO PAGE &rarr;</span>
      </div>
    </section>
  )
}

export default CoinTracker;