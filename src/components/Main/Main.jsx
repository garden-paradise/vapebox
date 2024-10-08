import { Route, Switch, Redirect } from 'react-router-dom';
import About from './About/About';
import BasketContainer from './Basket/BasketContainer';
import CatalogContainer from './Catalog/CatalogContainer';
import Contacts from './Contacts/Contacts';
import Delivery from './Delivery/Delivery';
import FAQ from './FAQ/FAQ';
import PersonalDataProtection from './PersonalDataProtection/PersonalDataProtection';
import PersonalPolicy from './PersonalPolicy/PersonalPolicy';
import Shops from './Shops/Shops';
import TermsOfUse from './TermsOfUse/TermsOfUse';
import Сomparison from './Сomparison/Сomparison';
import './Main.scss';
import HomeContainer from './Home/HomeContainer';
import ProductContainer from './Product/ProductContainer';
import AccountContainer from './Account/AccountContainer';
import Payment from './Payment/Payment';
import RecipientContainer from './Recipient/RecipientContainer';
import ArticleBlogContainer from './ArticleBlog/ArticleBlogContainer';
import BlogContainer from './Blog/BlogContainer';
import SignIn from './AuthMobile/SignIn';
import SignUp from './AuthMobile/SignUp';
import MailMessage from './AuthMobile/MailMessage';
import WelcomeMessage from './AuthMobile/WelcomeMessage';
import QuestionMessage from './AuthMobile/QuestionMessage ';
import StopMessage from './AuthMobile/StopMessage';
import Recovery from './AuthMobile/Recovery';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route
          path='/api/confirmation/:email/:token'
          component={HomeContainer}
        />
        <Route exact path='/about' component={About} />
      </Switch>
      <section className='main'>
        <Switch>
          <Route
            exact
            path='/product/:category?/:productId?'
            component={ProductContainer}
          />
          <Route exact path='/basket' component={BasketContainer} />
          <Route exact path='/delivery' component={Delivery} />
          <Route exact path='/terms-of-use' component={TermsOfUse} />
          <Route exact path='/personal-policy' component={PersonalPolicy} />
          <Route
            exact
            path='/personal-data-protection'
            component={PersonalDataProtection}
          />
          <Route exact path='/recipient' component={RecipientContainer} />
          <Route exact path='/payment' component={Payment} />
          <Route exact path='/catalog/:url?' component={CatalogContainer} />
          <Route exact path='/account/:url?' component={AccountContainer} />
          <Route exact path='/comparison' component={Сomparison} />
          <Route exact path='/shops' component={Shops} />
          <Route exact path='/contacts' component={Contacts} />
          <Route exact path='/F.A.Q.' component={FAQ} />
          <Route exact path='/blog' component={BlogContainer} />
          <Route exact path='/sign_in' component={SignIn} />
          <Route exact path='/sign_up' component={SignUp} />
          <Route exact path='/mail_message' component={MailMessage} />
          <Route exact path='/welcome_message' component={WelcomeMessage} />
          <Route exact path='/+18' component={QuestionMessage} />
          <Route exact path='/stop' component={StopMessage} />
          <Route exact path='/recovery' component={Recovery} />
          <Route
            exact
            path='/blog/:articleId'
            component={ArticleBlogContainer}
          />
          <Redirect exact from='*' to='/' />
        </Switch>
      </section>
    </main>
  );
};

export default Main;
