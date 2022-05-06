import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './style/Project.scss';

const Project = () => {
  /* const titleRef = useRef()
  const handleMouseMove = (rotate) => {
    let x = (window.innerWidth / 2 - rotate.clientX) / 20;
    let y = (window.innerHeight / 2 - rotate.clientY)/ 20;
    titleRef.current.style.transform = "rotateY(" + -x + "deg) rotateX(" + y + "deg)";
  } */
  const [color, setColor] = useState(true);
  const handleMouseOver = () => {
    setColor(false);
  }
  const handleMouseOut = () => {
    setColor(true);
  }

  /* const handleMouseOver = () => {
    imgRef.current.src = './img/con_color.png'
  }
  const handleMouseOut = () => {
    imgRef.current.src = './img/con_black.png'
  } */
  return (
  <div id="project">
      <header className="project_h">
        <h1><img src='./img/logo.svg' alt='logo' /></h1>
      </header>
      <main className="project_m">
        <div className='pro_list'>
          <h2><span>PROJECTS</span></h2>
          <Link to="/kocca" className="pro_item project1" /* onMouseMove={handleMouseMove} ref={titleRef} */ onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>01. <span className='kr_font'>한국콘텐츠진흥원</span></h3>
            <p># HTML<br /># CSS<br /># JQuery</p>
            <img src='./img/project-graphics1.svg' alt='frame' />
            <img src='./img/con_color.png' className={color ? 'black detail_photo' : 'detail_photo'} />
          </Link>
          <Link to="/megabox" className="pro_item project2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>02. MEGABOX</h3>
            <p># HTML<br /># CSS<br /># JavaScript</p>
            <img src='./img/project-graphics2.svg' alt='frame' />
            <img src='./img/megabox_color.png' className={color ? 'black detail_photo' : 'detail_photo'} />
          </Link>
          <Link to="/soomgo" className="pro_item project3" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>03. <span className='kr_font'>숨고</span></h3>
            <p># HTML<br /># CSS<br /># JavaScript</p>
            <img src='./img/project-graphics3.svg' alt='frame' />
            <img src='./img/soomgo_color.png' className={color ? 'black detail_photo' : 'detail_photo'} />
          </Link>
          <section className="pro_item project4">
            <h3>04. TO DO LIST</h3>
            <p># HTML<br /># CSS<br /># JavaScript</p>
            <img src='./img/project-graphics4.svg' alt='frame' />
          </section>
          <section className="pro_item project5">
            <h3>05. COIN TRACKER</h3>
            <p># React<br /># TypeScript</p>
            <img src='./img/project-graphics5.svg' alt='frame' />
          </section>
          <section className="pro_item project6">
            <h3>06. TRELLO</h3>
            <p># React</p>
            <img src='./img/project-graphics6.svg' alt='frame' />
          </section>
          <section className="pro_item project7">
            <h3>07. NETFLIX</h3>
            <p># React</p>
            <img src='./img/project-graphics7.svg' alt='frame' />
          </section>
        </div>
      </main>
  </div>
  )
};

export default Project;