import './BuyProduct.scss';

const BuyProduct = ({ data }) => {
  return (
    <section className='buyProducts'>
      {data.map((item, i) => (
        <section key={i} className='buyProduct'>
          <div className='buyProduct-content'>
            <div className='buyProduct-contentDiv'>
              <img
                src={`https://storage.googleapis.com/${item.data.photos.folder[0]}/${item.data.photos.path[0]}`}
                alt={item.data.photos.filename}
                className='buyProduct-img'
              />
              <div className='buyProduct-info'>
                <div className='buyProduct-info_name'>
                  {item.data.series.name}
                </div>
                <div className='buyProduct-info_title'>
                  <div className='buyProduct-info_taste'>
                    <span>Вкус: {item.data.flavor}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='buyProduct-contentDiv1'>
              <div className='buyProduct-btn'>
                <div className='buyProduct-btn_count'>{item.quantity}</div>
              </div>
              <div className='buyProduct-price'>
                <div className='buyProduct-price_count'>
                  {item.data.generalInfo.price} ₽
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default BuyProduct;
