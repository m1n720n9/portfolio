import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './style/Project.scss';
import logo from './img/logo_w.png'
import frame1 from './img/project-graphics1.svg';
import frame2 from './img/project-graphics2.svg';
import frame3 from './img/project-graphics3.svg';
import frame4 from './img/project-graphics4.svg';
import frame5 from './img/project-graphics5.svg';
import frame6 from './img/project-graphics6.svg';
import frame7 from './img/project-graphics7.svg';
import con_detail from './img/con_detail.png';
import megabox_detail from './img/megabox_detail.png';
import soomgo_detail from './img/soomgo_detail.png';
import todo_detail from './img/todolist_detail.png';
import portfolio_detail from './img/portfolio_detail.png';
import coin_detail from './img/coin_detail.png';



const Project = () => { 
  const handleProjectClick = () => {
    const sy = window.scrollY
    window.localStorage.setItem("toScroll", sy)
  }
  const moveToScroll = () => {
    window.scrollTo({left: 0, top: localStorage.getItem("toScroll"), behavior:"smooth"})
    window.localStorage.setItem("toScroll", 0)
  }
  useEffect(()=>{
    const timer = setTimeout(()=>{
      moveToScroll();
    }, 1300)
    return ()=>clearTimeout(timer)
  }, [])
  return (
  <div id="project">
      <header className="project_h" onClick={moveToScroll}>
        <h1><img src={logo} alt='logo' /></h1>
      </header>
      <main className="project_m">
        <div className='pro_list'>
          <h2><span >PROJECTS</span></h2>
          {linkData.map((link, idx) =>
            <ALink data={link} key={idx} onClick={()=>{handleProjectClick()}}   />
         )}
        </div>
      </main>
  </div>
  )
};

const ALink = ({data: {
    index, 
    title,
    isTitleKorean,
    to,
    skills,
    img,
    frameImg,
    classN
},onClick}) => {
  const handleLinkClick = () => {
    onClick()
  }
  return(
    <Link to={to} className={classN} onClick={()=>{handleLinkClick();}}>
            <h3>{`0${index}`} {isTitleKorean ? <span className='kr_font'>{title}</span>: <>{title}</>}</h3>
            <p>{skills.map((skill, idx )=>
              <span key={Math.random()}>
              {idx === 0 ? 
                <>
                  {`# ${skill}`} 
                </> 
                :
                <>
                  <br/>{`# ${skill}`} 
                </> 
              }
              </span>
            )}</p>
            <img src={frameImg} alt='frame' />
            <img src={img} className={'detail_photo'} alt='detail_photo' />
    </Link>
  )
}
export default Project;


const linkData = [
  {
    index: 1,
    title : "????????????????????????",
    isTitleKorean: true,
    to: "/kocca",
    skills: [
      "HTML",
      "CSS",
      "JQuery"
    ],
    img: con_detail,
    frameImg: frame1,
    classN : "pro_item project1"
  },
  {
    index: 2,
    title : "MEGABOX",
    isTitleKorean: false,
    to: "/megabox",
    skills: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    img: megabox_detail,
    frameImg: frame2,
    classN : "pro_item project2"
  },
  {
    index: 3,
    title : "??????",
    isTitleKorean: true,
    to: "/soomgo",
    skills: [
      "Responsive Web",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    img: soomgo_detail,
    frameImg: frame3,
    classN : "pro_item project3"
  },
  {
    index: 4,
    title : "TO DO LIST",
    isTitleKorean: false,
    to: "/todo_list",
    skills: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    img : todo_detail,
    frameImg: frame4,
    classN : "pro_item project4"
  },
  {
    index: 5,
    title : "COIN TRACKER",
    isTitleKorean: false,
    to: "/coin_tracker",
    skills: [
      "React",
      "TypeScript"
    ],
    img:coin_detail,
    frameImg: frame5,
    classN : "pro_item project5"
  },
  {
    index: 6,
    title : "TRELLO",
    isTitleKorean: false,
    skills: [
      "React"
    ],
    frameImg: frame6,
    classN : "pro_item project6"
  },
  {
    index: 7,
    title : "Portfolio",
    isTitleKorean: false,
    to: "/portfolio1",
    skills: [
      "React",
      "SCSS"
    ],
    img : portfolio_detail,
    frameImg: frame7,
    classN : "pro_item project7"
  },
]