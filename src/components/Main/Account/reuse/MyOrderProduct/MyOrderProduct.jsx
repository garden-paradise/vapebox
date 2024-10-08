import './MyOrderProduct.scss';
import Caret from './../../../../../images/main/all/CaretW.svg';
import Collapsible from 'react-collapsible';

const MyOrderProduct = ({ data }) => {
  return (
    <section className='myOrderProducts'>
      {data.map((item, i) => (
        <Collapsible
          key={i}
          transitionTime={150}
          triggerClassName='myOrderProductCollapsible'
          triggerOpenedClassName='myOrderProductCollapsible_open'
          contentOuterClassName='myOrderProductCollapsible_outer'
          trigger={[
            <section className='myOrderProduct'>
              <div className='myOrderProduct-img'></div>
              <div className='myOrderProduct-info'>
                <div className='myOrderProduct-name'>{item.name}</div>
                <div className='myOrderProduct-infoDown'>
                  <div className='myOrderProduct-count'>
                    <span className='myOrderProduct-countTitle'>Кол-во: </span>
                    {item.count}
                  </div>
                  <div className='myOrderProduct-sum'>{item.sum} ₽</div>
                  <div className='myOrderProduct-stasus'>{item.stasus}</div>
                </div>
              </div>
            </section>,
            <img className='arrowImg' src={Caret} alt='CaretImg' />,
          ]}
          triggerTagName='div'
        >
          <section className='myOrderProducts_info'>
            <div className='myOrderProducts_info-up'>
              <div>
                <div className='myOrderProducts_info-title'>Дата заказа</div>
                <div className='myOrderProducts_info-subTitle'>{item.date}</div>
              </div>
              <div className='myOrderProducts_info-upStatus'>
                <div className='myOrderProducts_info-title'>Статус</div>
                <div className='myOrderProducts_info-subTitle'>
                  {item.stasus}
                </div>
              </div>
            </div>
            <div>
              <div className='myOrderProducts_info-title'>Адрес магазина</div>
              <div className='myOrderProducts_info-subTitle'>
                {item.address}
              </div>
            </div>
            <div>
              <div className='myOrderProducts_info-title'>Получатель</div>
              <div className='myOrderProducts_info-subTitle'>
                {item.recipient}
              </div>
            </div>
          </section>
        </Collapsible>
      ))}
    </section>
  );
};

export default MyOrderProduct;
