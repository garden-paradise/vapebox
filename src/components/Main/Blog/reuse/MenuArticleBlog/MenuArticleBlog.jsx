import './MenuArticleBlog.scss';
import AspectRatio from 'react-aspect-ratio';
import { NavLink } from 'react-router-dom';

const MenuArticleBlog = ({ article }) => {
  return (
    <section className='menuArticleBlogs'>
      {article.map((item, i) => (
        <section key={i} className='menuArticleBlog'>
          {console.log(item)}
          <AspectRatio className='menuArticleBlog-aspectRatio'>
            <img
              src={`https://storage.googleapis.com/${item.photo.folder}/${item.photo.path}`}
              alt={item.photo.filename}
            />
          </AspectRatio>
          <NavLink to={`blog/${item._id}`} className='NavLink'>
            <div className='menuArticleBlog-title'>{item.title} </div>
          </NavLink>
          <div className='menuArticleBlog-subtitle'>
            {item.fullText.map((item) => item.value)}
          </div>
        </section>
      ))}
    </section>
  );
};

export default MenuArticleBlog;
