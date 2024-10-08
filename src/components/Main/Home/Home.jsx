import './Home.scss';
import { NavLink } from 'react-router-dom';
import CardProduct from '../../../reuse_Components/CardProduct/CardProduct';
import ArticleComp from './reuse/ArticleComp/ArticleComp';
import ShopsMini from '../ShopsMini/ShopsMini';
import banner from './../../../images/main/home/banner.png';
import about from './../../../images/main/home/about.png';
import newFon from './../../../images/main/fon/new.png';
import bestsFon from './../../../images/main/fon/bests.png';
import comands from './../../../images/main/fon/comands.png';
import paint from './../../../images/main/fon/paint.png';
import Title from '../../../reuse_Components/Title/Title';
import { useEffect } from 'react';
import { accountAPI } from '../../../api/info-api';

const Home = (props) => {
  useEffect(() => {
    props.getArticlesQuantum(2);
    window.innerWidth > 1199 &&
      props.getQuantityNewProducts(4) &&
      props.getQuantityPopularProducts(4);
    window.innerWidth < 1199 &&
      props.getQuantityNewProducts(3) &&
      props.getQuantityPopularProducts(3);
    window.innerWidth < 950 &&
      props.getQuantityNewProducts(2) &&
      props.getQuantityPopularProducts(2);
    window.innerWidth < 650 &&
      props.getQuantityNewProducts(10) &&
      props.getQuantityPopularProducts(10);
  }, [window.innerWidth]);
  useEffect(() => {
    let url = props.match.params;
    if (Object.keys(url).length > 0) {
      localStorage.setItem('token', url.token);
      accountAPI.getConfirmation(url.email, url.token);
    }
  }, []);

  return (
    props.favoritesArr &&
    props.quantityNewProducts &&
    props.quantityPopularProducts && (
      <section className='home'>
        <img className='home-img' src={banner} alt='bannerIMG' />
        <section className='Container SectionTop home-new'>
          <Title
            title='Новинки'
            linkUrl='catalog/new'
            linkName='Смотреть все'
          />
          <CardProduct
            products={props.quantityNewProducts}
            getItemCountBasket={props.getItemCountBasket}
            favoritesArr={props.favoritesArr}
            getFavorites={props.getFavorites}
          />
          <img className='FonIMG' src={newFon} alt='newFonIMG' />
        </section>
        <section className='Container SectionTop home-popular'>
          <Title
            title='Популярное'
            linkUrl='catalog/populary'
            linkName='Смотреть все'
          />
          <CardProduct
            products={props.quantityPopularProducts}
            getItemCountBasket={props.getItemCountBasket}
            favoritesArr={props.favoritesArr}
            getFavorites={props.getFavorites}
          />
          <img
            className='FonIMG home-popularImgFon'
            src={bestsFon}
            alt='bestsFonIMG'
          />
        </section>
        <section className='home-about'>
          <div className='Container home-aboutSec'>
            <img className='FonIMG' src={comands} alt='comandsFonIMG' />
            <div className='ColumnRevers home-aboutBlock'>
              <img className='home-aboutImgWeb' src={about} alt='aboutIMG' />
              <div className='home-aboutBlockInfo'>
                <div className='home-aboutBlockInfoTitle'>О нас</div>
                <div>
                  <p>
                    Короткое описание на главную страницу: Vapebox – магазин
                    электронных сигарет нового уровня. Наши главные ценности –
                    это высокое качество, уникальный стиль и лучшие товары на
                    рынке. Мы специализируемся на розничной и оптовой торговле
                    одноразовыми электронными сигаретами, а также на продаже
                    наших франшиз. В нашем магазине представлен широкий
                    ассортимент товаров – от хитов продаж до ярких новинок
                    рынка.
                  </p>
                  <img
                    className='home-aboutImgTel'
                    src={about}
                    alt='aboutIMG'
                  />
                  <p>
                    Миссия Vapebox – развивать культуру вейпинга по всей России.
                  </p>
                  <p>
                    Переверните свой взгляд на мир электронных сигарет с
                    Vapebox!
                  </p>
                </div>
                <div className='home-flexEnd'>
                  <NavLink
                    to='/about'
                    className='BtnGeneral NavLink home-aboutBlockBtnLink'
                  >
                    Подробнее
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        {props.articles && (
          <section className='home-blog'>
            <div className='Container home-blogBlock'>
              <Title
                title='Блог'
                linkUrl='blog'
                linkName='Смотреть все'
                style='black'
              />
              <ArticleComp articles={props.articles} />
            </div>
          </section>
        )}
        <section className='home-shops'>
          <ShopsMini title='Магазины' />
          <img
            className='Container FonIMG home-paintImgFon'
            src={paint}
            alt='paintFonIMG'
          />
        </section>
      </section>
    )
  );
};

export default Home;
