import './style/Profile.scss';
import logo from './img/logo.svg';
import selfie from "./img/zev.jpg";

const Selfie = () => {
  return(
    <section className="pic">
      <img src={selfie} alt='profile_pic' />
    </section>
  )
}

const Profile = () => {
  return (
  <div id="profile">
      <header className="profile_h">
        <h1><img src={logo} alt='logo' /></h1>
      </header>
      <section className="profile_c">
        <h2><span>ABOUT ME</span></h2>
        <div className="flex">
          <div className='flex'>
            <Selfie />
          </div>
          <div className='information'>
            <section className="text">
              <p>NAME 석민정</p>
              <p>BIRTH 1997. 01 .02</p>
              <p>EDUCATION 순천향대학교 신문방송학과</p>
              <p className="intro">~ 한 줄 소개란입니다. 멘트는 신중하고 신중하게 고민 중입니다. ~</p>
            </section>
            <section className="skills">
              <h3>MY SKILLS</h3>
              <div className="skill">
                <span>HTML</span>
                <span>SCSS</span>
                <span>JQuery</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>TypeScript</span>
              </div>
            </section>
          </div>
        </div>
      </section>
  </div>
  )
}

export default Profile;