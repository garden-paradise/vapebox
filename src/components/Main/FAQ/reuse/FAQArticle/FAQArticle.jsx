import './FAQArticle.scss';
import Caret from './../../../../../images/main/all/CaretW.svg';
import Collapsible from 'react-collapsible';

const FAQArticle = ({ article }) => {
  return (
    <section className='FAQArticles'>
      {article.map((item, i) => (
        <Collapsible
          key={i}
          transitionTime={150}
          triggerClassName='FAQArticleCollapsible'
          triggerOpenedClassName='FAQArticleCollapsible_open'
          contentOuterClassName='FAQArticleCollapsible_outer'
          triggerTagName='div'
          trigger={[
            <section className='FAQArticle'>{item.title}</section>,
            <img src={Caret} alt='CaretIMG' />,
          ]}
        >
          <div className='FAQArticle-subtitle'>{item.subtitle}</div>
        </Collapsible>
      ))}
    </section>
  );
};

export default FAQArticle;
