import Title from '../../../reuse_Components/Title/Title';
import './Blog.scss';
import NavLinks from '../../../reuse_Components/NavLinks/NavLinks';
import MenuArticleBlog from './reuse/MenuArticleBlog/MenuArticleBlog';
import ArrowTitle from '../../../reuse_Components/ArrowTitle/ArrowTitle';
import { useEffect } from 'react';

const Blog = (props) => {
  useEffect(() => {
    props.getAllArticles();
  }, []);
  return (
    props.articles && (
      <section className='Container PageBottom200'>
        {window.innerWidth < 480 ? (
          <ArrowTitle title='Главная' />
        ) : (
          <NavLinks
            data={[
              { url: '', name: 'Главная', active: false },
              { url: 'blog', name: 'Блог', active: true },
            ]}
          />
        )}

        <Title title='Блог' />

        <MenuArticleBlog article={props.articles} />
      </section>
    )
  );
};

export default Blog;
