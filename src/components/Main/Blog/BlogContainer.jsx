import { connect } from 'react-redux';
import { getAllArticles } from '../../../redux/articles-reducer';
import Blog from './Blog';

const mapStateToProps = (state) => {
  return {
    articles: state.articles.articles,
  };
};

export default connect(mapStateToProps, { getAllArticles })(Blog);
