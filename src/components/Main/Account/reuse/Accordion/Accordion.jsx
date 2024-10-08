import Collapsible from 'react-collapsible';
import './Accordion.scss';
import Caret from './../../../../../images/main/all/Caret.svg';

const Accordion = ({ children, name }) => {
  return (
    <Collapsible
      transitionTime={150}
      triggerClassName='CustomTriggerCSS'
      triggerOpenedClassName='CustomTriggerCSS_open'
      trigger={[name, <img className='arrowImg' src={Caret} alt='CaretImg' />]}
      triggerTagName='div'
    >
      {children}
    </Collapsible>
  );
};

export default Accordion;
