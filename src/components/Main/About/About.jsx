import Title from '../../../reuse_Components/Title/Title';
import './About.scss';
import img_1 from './../../../images/main/comand/img_1.png';
import img_2 from './../../../images/main/comand/img_2.png';
import img_3 from './../../../images/main/comand/img_3.png';
import img_4 from './../../../images/main/comand/img_4.png';
import img_6 from './../../../images/main/comand/img_6.png';
import fon1 from './../../../images/main/about/fon1.png';
import fon2 from './../../../images/main/about/fon2.png';
import fon4 from './../../../images/main/about/fon4.png';
import fon5 from './../../../images/main/about/fon5.png';
import PeopleCard from './reuse/PeopleCard/PeopleCard';
import ArrowTitle from '../../../reuse_Components/ArrowTitle/ArrowTitle';

const About = () => {
  return (
    <section className='about'>
      <section className='Container about-about'>
        {window.innerWidth < 480 && <ArrowTitle title='Главная' link='' />}
        <Title title='О нас' />
      </section>

      <section className='Container about-about'>
        <div className='Column about-section'>
          <div className='about-info'>
            <div className='about-title'>
              Меняй правила игры с Smoky Island!
            </div>
            <div>
              Smoky Island – сеть магазинов электронных сигарет нового уровня.
            </div>
            <div>
              Наши главные ценности – это высокое качество, уникальный стиль и
              лучшие товары на рынке.
            </div>
            <div>
              Мы специализируемся на торговле POD-системами, вейпами, жидкостями
              и атомайзерами, а также на продаже наших франшиз. В розничных
              магазинах Smoky Island представлен широкий ассортимент товаров –
              от одноразовых электронных сигарет до высокотехнологичных
              девайсов.
            </div>
            <div>
              Миссия Smoky Island – развивать культуру вейпинга по всей России.
            </div>
          </div>
          <img src={fon1} alt='fon1IMG' />
        </div>
        <div className='ColumnRevers about-section about-sectionCenter'>
          <img src={fon2} alt='fon1IMG' />
          <div className='about-info'>
            <div>
              Зимой 2022 года в Москве открылись первые розничные магазины Smoky
              Island. И это только начало! Во втором квартале этого года мы
              планируем запустить продажу франшиз.
            </div>
            <div>
              Мы постоянно обновляем ассортимент и расширяем каталог продукции,
              основываясь на предпочтениях покупателей. Каждый товар можно
              проверить на оригинальность.
            </div>
          </div>
        </div>
      </section>

      <section className='about-blockquote'>
        Smoky Island – это игра, в которой ты уже победил и сам выбираешь
        главный приз.
      </section>

      <section className='about-sectionWhite'>
        <div className='Column about-section'>
          <div className='about-infoBlack'>
            <div className='about-title'>
              <b>Smoky Island – для тех, кто:</b>
            </div>
            <div className='about-marker'>• Хочет обновить свой арсенал</div>
            <div>
              Наш ассортимент включает в себя товары как от лидеров, так и от
              новых игроков в мире электронных сигарет.
            </div>
            <div className='about-marker'>
              • Ценит качество и выбирает лучшее
            </div>
            <div>
              Только оригинальные бренды от официальных поставщиков. Качество
              нашей продукцией подтверждено сертификатами.
            </div>
            <div className='about-marker'>
              • Хочет пообщаться с единомышленниками
            </div>
            <div>
              Наши продавцы-консультанты – настоящие профессионалы своего дела,
              которые дадут вам индивидуальные рекомендации по товарам и ответят
              на все вопросы.
            </div>
          </div>
          <img src={fon4} alt='fon1IMG' />
        </div>
        <div className='ColumnRevers about-section'>
          <img src={fon5} alt='fon1IMG' />
          <div className='about-infoBlack'>
            <div className='about-marker'>
              • Хочет первым узнавать о трендах в мире вейпинга
            </div>
            <div>
              Мы всегда находимся в центре всех новинок и держим руку на пульсе
              актуальных трендов. Подписывайтесь на наш Instagram{' '}
              <a href='/'>@smokyisland.shop</a> , чтобы быть в курсе новостей
              рынка.
            </div>
            <div className='about-marker'>• Открыт к ярким впечатлениям</div>
            <div>
              Если вы готовы удивляться и хотите почувствовать нашу особенную
              атмосферу, то приходите в наши магазины за положительными
              эмоциями.
            </div>
            <div>
              <b>
                Не отказывайте себе в удовольствии – загляните в Smoky Island!
              </b>
            </div>
          </div>
        </div>
      </section>

      <section className='Container PageBottom200 about-command'>
        <Title title='Наша команда' />
        <PeopleCard
          people={[
            {
              img: img_1,
              name: 'Шефлер Алексей Юрьевич',
              position: 'Председатель правления',
            },
            {
              img: img_2,
              name: 'Мельников Денис Алексеевич ',
              position: 'Заместитель председателя правления',
            },
            {
              img: img_3,
              name: 'Стихарев Юрий Романович',
              position: 'Управляющий партнер',
            },
            {
              img: img_4,
              name: 'Козловский Денис Станиславович',
              position: 'Генеральный директор',
            },
            {
              img: img_6,
              name: 'Головин Султан Александрович',
              position: 'Операционный директор',
            },
          ]}
        />
      </section>
    </section>
  );
};

export default About;
