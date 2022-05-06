import './style/Contact.scss';


const Contact = () => {
  return (
  <div id="contact">
      <header className="contact_h">
        <h1><img src='./img/logo.svg' alt='logo' /></h1>
      </header>
      <main className="contact_m">
        <h2>
          <p>LET'S
            <span> W</span>
            <span>O</span>
            <span>R</span>
            <span>K</span>
            <span>&nbsp;</span>
            <span>T</span>
            <span>O</span>
            <span>G</span>
            <span>E</span>
            <span>T</span>
            <span>H</span>
            <span>E</span>
            <span>R</span>
          </p>
        </h2>
        <section className='info'>
          <p>NAME : 석민정</p>
          <p>E-mail : skmnjng@gmail.com</p>
          <p>Address : 경기도 수원시</p>
          <p>TEL : 010-7157-0818</p>
        </section>
      </main>
  </div>
  )
};

export default Contact;