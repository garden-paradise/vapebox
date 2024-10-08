import { useEffect, useState } from 'react';
import Title from '../../../../../reuse_Components/Title/Title';
import ShopsMini from '../../../ShopsMini/ShopsMini';
import './InsideMenu.scss';
import { connect } from 'react-redux';
import { getMenuOpen } from '../../../../../redux/menu-reducer';
import { Field, Form } from 'react-final-form';
import { requiredValidator } from '../../../../../utils/validators';
import star from './../../../../../images/main/product/star.png';
import starColor from './../../../../../images/main/product/starColor.svg';
import { getStars } from '../../../../../redux/comments-reducer';

const InsideMenu = (props) => {
  const [toggleMenu, setToggleMenu] = useState(props.title[0]);

  const addStars = (count = 0) => {
    let starArr = props.stars;
    for (let i = 0; i <= starArr.length - 1; i++) {
      if (i < count) {
        starArr[i] = starColor;
      }
      if (i >= count) {
        starArr[i] = star;
      }
    }
    getStars(starArr);
  };
  const addCommentStars = () => {
    let starArr = [star, star, star, star, star];
    for (let i = 0; i < props.commentRating; i++) {
      starArr[i] = starColor;
    }
    return starArr;
  };

  const onSubmitEnter = async (values) => {
    console.log(values);
  };

  // useEffect(() => {
  //   setToggleMenu(props.title[2]);
  // }, [props]);

  return (
    <section className='insideMenu'>
      <nav className='insideMenu-nav'>
        <ul className='insideMenu-ul'>
          {props.title.map((item, i) => (
            <li
              key={i}
              onClick={() => setToggleMenu(item)}
              className={`insideMenu-li ${
                toggleMenu === item && 'insideMenu-liActive'
              } `}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      {toggleMenu === 'О товаре' && (
        <section className='Container Column insideMenu-about'>
          <div>
            <Title title='О товаре' />
            {props.about}
          </div>
          {/* <div>
            <Title title='Комплектация' />
            {complects.map((item, i) => (
              <div key={i} className='insideMenu-aboutComplect'>
                <span>{i + 1}</span> &#160;
                {item}
              </div>
            ))}
          </div> */}
        </section>
      )}
      {toggleMenu === 'Характеристика' && (
        <section className='Container insideMenu-characteristic'>
          <Title title='Характеристика' />
          <div className='insideMenu-characteristicInfos'>
            {props.characteristic.map((item, i) => {
              if (item.value !== undefined) {
                return (
                  <div key={i} className='insideMenu-characteristicInfo'>
                    <div>{item.name}</div>
                    {item.value}
                  </div>
                );
              }
            })}
          </div>
        </section>
      )}
      {toggleMenu === 'Коментарии' && (
        <section className='Container insideMenu-comments'>
          <Title title='Комментарии' />
          <div className='insideMenu-commentsSubtitle'>
            Комментарий может оставлять только зарегистрированный пользователь
          </div>
          <div
            onClick={() => {
              props.getMenuOpen(true);
              window.scrollTo(0, 0);
            }}
            className='insideMenu-commentsLink'
          >
            Войти / Создать аккаунт
          </div>

          <div className='insideMenu-commentsBlock'>
            <Form
              onSubmit={onSubmitEnter}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Field name='email' validate={requiredValidator}>
                    {({ input, meta }) => (
                      <input
                        className={`insideMenu-input ${
                          meta.error && meta.touched && 'form-error'
                        }`}
                        {...input}
                        type='text'
                        placeholder='Введите текст'
                      />
                    )}
                  </Field>
                  <div className='insideMenu-stars'>
                    {props.stars.map((item, i) => (
                      <img
                        key={i}
                        onClick={() => {
                          addStars(i + 1);
                        }}
                        src={item}
                        alt='starIMG'
                      />
                    ))}
                  </div>
                  <button className='BtnGeneral insideMenu-btn' type='submit'>
                    Опубликовать
                  </button>
                </form>
              )}
            />
          </div>

          <div className='insideMenu-commentsAll'>
            <div className='insideMenu-comment'>
              <div className='insideMenu-commentUp'>
                <div className='insideMenu-commentUpTitle'>
                  Имя пользователя
                </div>
                <div className='insideMenu-commentUpStars'>
                  {addCommentStars().map((item, i) => (
                    <img key={i} src={item} alt='starIMG' />
                  ))}
                </div>
              </div>
              <div className='insideMenu-commentMiddle'>Дата публикации</div>
              <div className='insideMenu-commentDown'>
                Идейные соображения высшего порядка, а также реализация
                намеченных плановых заданий позволяет выполнять важные задания
                по разработке новых предложений.
              </div>
            </div>
            <div className='insideMenu-comment'>
              <div className='insideMenu-commentUp'>
                <div className='insideMenu-commentUpTitle'>
                  Имя пользователя
                </div>
                <div className='insideMenu-commentUpStars'>
                  {addCommentStars().map((item, i) => (
                    <img key={i} src={item} alt='starIMG' />
                  ))}
                </div>
              </div>
              <div className='insideMenu-commentMiddle'>Дата публикации</div>
              <div className='insideMenu-commentDown'>
                Идейные соображения высшего порядка, а также реализация
                намеченных плановых заданий позволяет выполнять важные задания
                по разработке новых предложений.
              </div>
            </div>
            <div className='insideMenu-comment'>
              <div className='insideMenu-commentUp'>
                <div className='insideMenu-commentUpTitle'>
                  Имя пользователя
                </div>
                <div className='insideMenu-commentUpStars'>
                  {addCommentStars().map((item, i) => (
                    <img key={i} src={item} alt='starIMG' />
                  ))}
                </div>
              </div>
              <div className='insideMenu-commentMiddle'>Дата публикации</div>
              <div className='insideMenu-commentDown'>
                Идейные соображения высшего порядка, а также реализация
                намеченных плановых заданий позволяет выполнять важные задания
                по разработке новых предложений.
              </div>
            </div>
          </div>
        </section>
      )}
      {toggleMenu === 'Наличие в магазинах' && (
        <ShopsMini title='Наличие в магазинах' />
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    menuOpen: state.menu.menuOpen,
    stars: state.comments.stars,
  };
};

export default connect(mapStateToProps, {
  getMenuOpen,
  getStars,
})(InsideMenu);
