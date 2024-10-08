import { useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';
import ScrollToTop from './utils/scrollToTop.js';
import './app.scss';
import QuestionMessage from './components/Main/AuthMobile/QuestionMessage ';
import StopMessage from './components/Main/AuthMobile/StopMessage';

const App = () => {
  let location = useLocation();
  return localStorage.getItem('adult') === null && window.innerWidth < 480 ? (
    location.pathname === '/stop' ? (
      <StopMessage />
    ) : (
      <QuestionMessage />
    )
  ) : (
    <section className='app'>
      <div>
        <ScrollToTop />
        {location.pathname !== '/sign_in' &&
          location.pathname !== '/recovery' &&
          location.pathname !== '/mail_message' &&
          location.pathname !== '/welcome_message' &&
          location.pathname !== '/stop' &&
          location.pathname !== '/+18' &&
          location.pathname !== '/sign_up' && <HeaderContainer />}
        : <Main />
      </div>
      {location.pathname !== '/sign_in' &&
        location.pathname !== '/recovery' &&
        location.pathname !== '/mail_message' &&
        location.pathname !== '/welcome_message' &&
        location.pathname !== '/stop' &&
        location.pathname !== '/+18' &&
        location.pathname !== '/sign_up' && <Footer />}
    </section>
  );
};

export default App;
