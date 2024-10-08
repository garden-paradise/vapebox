import { connect } from 'react-redux';
import { getArticle } from '../../../redux/articles-reducer';
import ArticleBlog from './ArticleBlog';

const mapStateToProps = (state) => {
  return {
    article: state.articles.article,
  };
};

export default connect(mapStateToProps, { getArticle })(ArticleBlog);
