import './PopularProduct.scss';
import heart from './../../../../../images/header/HeartRed.svg';
import ArrowsClockwise from './../../../../../images/header/ArrowsClockwise.svg';

const PopularProduct = ({ data }) => {
  return data.map((item, i) => (
    <section key={i} className='popularProduct'>
      {/* <img src='' alt='' /> */}
      <div className='popularProduct-img'></div>
      <div className='popularProduct-content'>
        <div>
          <div>{item.name}</div>
          <div className='popularProduct-price'>{item.price} ₽</div>
        </div>

        <div className='popularProduct-right'>
          <div className='popularProduct-icon'>
            <img src={heart} alt='heartIMG' />
          </div>
          <div className='popularProduct-icon'>
            <img src={ArrowsClockwise} alt='ArrowsClockwiseIMG' />
          </div>
        </div>
      </div>
    </section>
  ));
};

export default PopularProduct;
