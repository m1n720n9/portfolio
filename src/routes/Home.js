import {FullPage,Slide} from 'react-full-page';
import Main from '../components/Main';
import Profile from '../components/Profile';
import Project from '../components/Project';
import Contact from '../components/Contact';

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
          <Project/>
        </Slide>
        <Slide>
          <Contact />
        </Slide>
      </FullPage>
    </>
  )
};
export default Home;