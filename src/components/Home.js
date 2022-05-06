import {FullPage,Slide} from 'react-full-page';
import Main from './Main';
import Profile from './Profile';
import Project from './Project';
import Contact from './Contact';

const Home = () => {
  return (
  <>
  <FullPage duration={1000}>
    <Slide>
      <Main />
    </Slide>
    <Slide>
      <Profile />
    </Slide>
    <Slide>
      <Project />
    </Slide>
    <Slide>
      <Contact />
    </Slide>
  </FullPage>
  </>
  )
};

export default Home;