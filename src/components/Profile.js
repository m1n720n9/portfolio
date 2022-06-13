import './style/Profile.scss';
import logo from './img/logo_w.png'

const Profile = () => {
  return (
  <div id="profile">
      <header className="profile_h">
        <h1><img src={logo} alt='logo' /></h1>
      </header>
      <section className="container">
        <h2><span>ABOUT ME</span></h2>
        <div className='information'>
          <section className="text">
            <p>Name 석민정</p>
            <p>Birth 1997. 01 .02</p>
            <p>Address 경기도 수원시</p>
            <p>Education 순천향대학교 신문방송학과</p>
          </section>
          <section className="skills">
            <h3><span>MY SKILLS</span></h3>
            <div className="skill">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
        </div>
      </section>
  </div>
  )
}

export default Profile;