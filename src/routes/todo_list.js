import './style/todo_list.scss'
import ico_clock from './img/ico_clock.png'
import ico_pro from './img/ico_pro.png'

const Todo_list = () => {
  return(
    <section id='todo_list'>
      <div className="color_box">
        <div className='title'>
          <h2>TO DO LIST
          <a href='https://github.com/m1n720n9/todo_list' target='_blank' rel="noreferrer"><img className='skill_logo' src={require('./img/logo_github.png')} alt='git logo' /></a>
          </h2>
        </div>
        <div className='text'>
          <ul>
            <li>JavaScript의 기본기를 이해하기 위해 Vanilla JS로 만든 웹 서비스</li>
            <li>시계, 할 일 목록, 날씨, 랜덤 이미지 및 텍스트 제공 등의 기능 구현</li>
            <li>Data Fetching ( OpenWeather API, Geolocation API )</li>
            <li>Local Storage를 사용하여 데이터 관리</li>
          </ul>
          <p><img src={ico_pro} alt='icon'/> 사용 기술 : HTML CSS JavaScript</p>
          <p><img src={ico_clock} alt='icon'/> 제작 기간 : 7일</p>
          <div className='skills'>
            <img className='skill_logo' src={require("./img/logo_html.png")} alt='icon' />
            <img className='skill_logo' src={require('./img/logo_css.png')} alt='icon' />
            <img className='skill_logo' src={require('./img/logo_js.png')} alt='icon' />
          </div>
        </div>      
      </div>
      <div className="flow_img">
        <a href="https://m1n720n9.github.io/todo_list/" target='_blank' rel="noreferrer"><img src={require('./img/todo_flow.png')} alt='page capture' /></a>
        <span>CLICK TO GO TO PAGE &rarr;</span>
      </div>
    </section>
  )
}

export default Todo_list;