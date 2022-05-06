import './style/megabox.scss'

const Megabox = () => { 
  return(
    <section id='megabox'>
      <div className="color_box">
        <div className='text'>
          <h2>메가박스</h2>
          <p>HTML, CSS, JavaScript을 이용하여 제작한 클론 코딩</p>
          <div className='skills'>
            <img className='skill_logo' src={require("./img/logo_html.png")} />
            <img className='skill_logo' src={require('./img/logo_css.png')} />
            <img className='skill_logo' src={require('./img/logo_js.png')} />
          </div>
          <div className='link'>
            <a href='https://github.com/m1n720n9/megabox' target='_blank'><img className='skill_logo' src={require('./img/logo_github.png')} /></a>
          </div>
        </div>
      </div>
      <div className="flow_img">
        <a href="https://m1n720n9.github.io/megabox/" target='_blank'><img src={require('./img/megabox_flow.png')} /></a>
      </div>
    </section>
  )
}

export default Megabox;

