import './Footer.scss';
import MenuDown from './reuse/MenuDown/MenuDown';
// import vk from './../../images/footer/vk.svg';
import inst from './../../images/footer/inst.svg';
// import telegram from './../../images/footer/TelegramLogo.svg';
// import facebook from './../../images/footer/face.svg';
import argoSoft from './../../images/footer/argoSoft.svg';
// import Visa from './../../images/footer/Visa.svg';
// import Mastercard from './../../images/footer/Mastercard.svg';
// import GooglePay from './../../images/footer/GooglePay.svg';
// import ApplePay from './../../images/footer/ApplePay.svg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <header className='footer'>
      <section className='footer-bgd'>
        <section className='Container footer-sec1'>
          <MenuDown
            data={[
              {
                title: 'Компания',
                subtitle: [
                  { subtitle: 'О нас', subtitleLink: '/about' },
                  { subtitle: 'Магазины', subtitleLink: '/shops' },
                  { subtitle: 'Блог', subtitleLink: '/blog' },
                ],
              },
              {
                title: 'Информация',
                subtitle: [
                  { subtitle: 'Доставка', subtitleLink: '/delivery' },
                  { subtitle: 'Способы оплаты', subtitleLink: '/payment' },
                  { subtitle: 'F. A. Q.', subtitleLink: '/F.A.Q.' },
                ],
              },
              {
                title: 'Будь с нами',
                images: [
                  {
                    img: inst,
                    imgLink: 'https://www.instagram.com/smokyisland.shop/',
                  },
                  // { img: vk, imgLink: '/3123' },
                  // { img: telegram, imgLink: '/13' },
                  // { img: facebook, imgLink: '/rfed' },
                ],
              },
              {
                title: 'Контакты',
                tel: '8 499 514 56 26',
              },
              {
                title: 'Подписывайся',
                form: true,
              },
            ]}
          />
        </section>

        <section className='Container footer-sec2'>
          <div className='footer-sec2Info'>
            <div className='footer-sec2Info18'>18+</div>
            <div className='footer-sec2Info2022'>2022 Smoky Island</div>
          </div>
          <div className='footer-sec2Policys'>
            <NavLink to='/terms-of-use' className='footer-sec2Policy'>
              Пользовательское соглашение
            </NavLink>
            <NavLink to='/personal-policy' className='footer-sec2Policy'>
              Согласие на обработку персональных данных
            </NavLink>
            <NavLink
              to='/personal-data-protection'
              className='footer-sec2Policy'
            >
              Положение о порядке хранения и защиты персональных данных
            </NavLink>
          </div>
          <div className='footer-sec2Argo'>
            <div>
              Сайт создан компанией
              <b>
                <a
                  className='footer-site'
                  target='_blank'
                  href='https://argo-soft-works.ru/'
                >
                  ArgoSoftWorks
                </a>
              </b>
            </div>
            <img
              className='footer-sec2ArgoLogo'
              src={argoSoft}
              alt='argoSoftIMG'
            />
          </div>
          <div className='footer-sec2Info2022Bottom'>2022 Smoky Island</div>
          {/* <div>
            <img src={Visa} alt='imageCard' />
            <img src={Mastercard} alt='imageCard' />
            <img src={GooglePay} alt='imageCard' />
            <img src={ApplePay} alt='imageCard' />
          </div> */}
        </section>
      </section>
    </header>
  );
};
export default Footer;
