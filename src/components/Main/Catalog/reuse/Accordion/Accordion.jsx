import Collapsible from 'react-collapsible';
import './Accordion.scss';
import Caret from './../../../../../images/main/all/Caret.svg';

const Accordion = ({ children, name }) => {
  return (
    <Collapsible
      transitionTime={150}
      className='catalog'
      triggerClassName='catalogCollapsible'
      triggerOpenedClassName='catalogCollapsible_open'
      contentOuterClassName='catalogCollapsible_outer'
      trigger={[name, <img className='arrowImg' src={Caret} alt='CaretImg' />]}
      triggerTagName='div'
    >
      {children}
    </Collapsible>
  );
};

export default Accordion;
