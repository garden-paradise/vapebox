import { NavLink } from 'react-router-dom';
import './ArticleComp.scss';

const ArticleComp = ({ articles }) => {
  return (
    <section className='articlesComp'>
      {articles.map((article, i) => (
        <section key={i} className='articlesComp-article'>
          <img
            src={`https://storage.googleapis.com/${article.photo.folder}/${article.photo.path}`}
            alt={article.photo.filename}
          />
          <div className='articlesComp-info'>
            <NavLink
              to={`blog/${article._id}`}
              className='NavLink articlesComp-link'
            >
              {article.title}
            </NavLink>
          </div>
        </section>
      ))}
    </section>
  );
};

export default ArticleComp;
