import './style/todo_list.scss'

const Todo_list = () => {
  return(
    <section id='todo_list'>
      <div className="color_box">
        <div className='text'>
          <h2>TO DO LIST</h2>
          <p>HTML, CSS, JavaScript을 이용하여 제작한 TO DO LIST</p>
          <div className='skills'>
            <img className='skill_logo' src={require("./img/logo_html.png")} />
            <img className='skill_logo' src={require('./img/logo_css.png')} />
            <img className='skill_logo' src={require('./img/logo_js.png')} />
          </div>
          <div className='link'>
            <a href='https://github.com/m1n720n9/todo_list' target='_blank'><img className='skill_logo' src={require('./img/logo_github.png')} /></a>
          </div>
        </div>
      </div>
      <div className="flow_img">
        <a href="https://m1n720n9.github.io/todo_list/" target='_blank'><img src={require('./img/soomgo_flow_tnm.png')} /></a>
      </div>
    </section>
  )
}

export default Todo_list;