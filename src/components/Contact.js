import './style/Contact.scss';
import TextLoop from "react-text-loop";
import logo from './img/logo_w.png'
import github from './img/github.svg'

const Contact = () => {
  return (
  <div id="contact">
      <header className="contact_h">
      <h1><img src={logo} alt='logo' /></h1>
      </header>
      <main className="contact_m">
        <h2>
          {"LET'S "}
          <TextLoop springConfig={{stiffness: 50, damping: 10}}>
              <span>WORK TOGETHER</span>
              <span>GRAB A COFFEE</span>
              <span>TALK DEVELOPMENT</span>
              <span>DO LUNCH</span>
              <span>CREAT SOMETHING</span>
          </TextLoop>
        </h2>
        <section className='info'>
          <p>NAME : 석민정</p>
          <p>E-mail : skmnjng@gmail.com</p>
          <p>Address : 경기도 수원시</p>
          <p>TEL : 010-7157-0818</p>
          <a href='https://github.com/m1n720n9' target="blank"><img src={github} alt='git_logo' /></a>
        </section>
        
      </main>
     
  </div>
  )
};

export default Contact;



