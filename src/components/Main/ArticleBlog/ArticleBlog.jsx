import './ArticleBlog.scss';
import NavLinks from '../../../reuse_Components/NavLinks/NavLinks';
import { Field, Form } from 'react-final-form';
import { emailValidator } from '../../../utils/validators';
import vk from './../../../images/footer/vk.svg';
import inst from './../../../images/footer/inst.svg';
import tlg from './../../../images/footer/TelegramLogo.svg';
import facebook from './../../../images/footer/face.svg';
import PopularProduct from './reuse/PopularProduct/PopularProduct';
import Title from '../../../reuse_Components/Title/Title';
import { useEffect } from 'react';

const onSubmit = (values) => {
  console.log(values);
};

const ArticleBlog = (props) => {
  useEffect(() => {
    props.getArticle(props.match.params.articleId);
  }, []);

  return (
    props.article && (
      <section className='Container PageBottom200 articleBlog'>
        <NavLinks
          data={[
            { url: '', name: 'Главная', active: false },
            { url: 'blog', name: 'Блог', active: false },
            {
              url: `/${props.match.url}`,
              name: props.article[0].title,
              active: true,
            },
          ]}
        />
        <Title title={`${props.article[0].title}`} />
        <div className='articleBlog-authors'>
          {new Date(props.article[0].createdAt).toLocaleDateString()}
        </div>
        <div className='articleBlog-section'>
          <div>
            <img
              className='articleBlog-img'
              src={`https://storage.googleapis.com/${props.article[0].photo.folder}/${props.article[0].photo.path}`}
              alt={props.article[0].photo.filename}
            />
            <div className='articleBlog-text'>
              {props.article[0].fullText[0].value}
            </div>
          </div>
          <div className='articleBlog-sectionInfo'>
            <div className='articleBlog-emailForm'>
              <div className='articleBlog-emailFormTitle'>Присоединяйся!</div>
              <div className='articleBlog-emailFormSubtitle'>
                Акции, новости и обновления.
              </div>
              <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                  <form className='articleBlog-form' onSubmit={handleSubmit}>
                    <Field name='email' validate={emailValidator}>
                      {({ input, meta }) => (
                        <input
                          className={`articleBlog-formEmail ${
                            meta.error &&
                            meta.touched &&
                            'articleBlog-formError'
                          }`}
                          {...input}
                          type='email'
                          placeholder='E-mail'
                        />
                      )}
                    </Field>
                    <button className='articleBlog-btn' type='submit'>
                      Подписаться
                    </button>
                  </form>
                )}
              />
              <div className='articleBlog-emailFormSubtitle'>
                100% бесплатно, отпишитесь в любое время
              </div>
            </div>
            <div className='articleBlog-popularProduct'>
              <div className='articleBlog-leftTitle'>Популярное</div>
              <PopularProduct
                data={[
                  {
                    name: 'Название',
                    price: 1990,
                  },
                  {
                    name: 'Название',
                    price: 1990,
                  },
                ]}
              />
            </div>
            <div className='articleBlog-social'>
              <div className='articleBlog-leftTitle'>Будь с нами</div>
              <div className='articleBlog-socialBlock'>
                <a
                  href='https://www.instagram.com/smokyisland.shop/'
                  target='_blank'
                >
                  <img src={inst} alt='instIMG' />
                </a>
                {/* <img src={vk} alt='vkIMG' />
              <img src={tlg} alt='tlgIMG' />
              <img src={facebook} alt='facebookIMG' /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default ArticleBlog;
