import './style/Profile.scss';

const Profile = () => {
  return (
  <div id="profile">
      <header className="profile_h">
        <h1><img src='./img/logo.svg' alt='logo' /></h1>
      </header>
      <section className="profile_c">
        <h2><span>ABOUT ME</span></h2>
        <div className="flex">
          <div className='flex'>
            <section className="pic">
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
            </section>
            <section className="pic">
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
            </section>
            <section className="pic">
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
            </section>
            <section className="pic">
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
            </section>
            <section className="pic">
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
              <img src="./img/profile_pic.jpg" alt='profile_pic' />
            </section>
          </div>
          <div className='information'>
            <section className="text">
              <p>NAME 석민정</p>
              <p>BIRTH 1997. 01 .02</p>
              <p>EDUCATION 순천향대학교 신문방송학과</p>
              <p className="intro">아 졸려요 피곤해요 커피는 맛있는데 잠이 안 깨요...... 바닐라 딜라이트 짱!</p>
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