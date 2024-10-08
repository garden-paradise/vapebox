import './SelectedProduct.scss';

const SelectedProduct = ({
  products,
  deleteBasketProducts,
  changeCountBasketProduct,
}) => {
  return (
    <section className='selectedProducts'>
      {products &&
        products.map((item, i) => (
          <section key={i} className='selectedProduct'>
            <div
              onClick={() => deleteBasketProducts({ ...item, basket: false })}
              className='selectedProduct-delete'
            >
              &#10006;
            </div>
            <div className='selectedProduct-content'>
              <div className='selectedProduct-leftUp'>
                <img
                  src={`https://storage.googleapis.com/${item.data.photos.folder[0]}/${item.data.photos.path[0]}`}
                  alt={item.data.photos.filename}
                  className='selectedProduct-img'
                />
                <div className='selectedProduct-info'>
                  <div className='selectedProduct-info_name'>
                    {item.data.series.name}
                  </div>
                  <div className='selectedProduct-info_title'>
                    {`Вкус: ${item.data.flavor}`}
                  </div>
                </div>
              </div>
              <div className='selectedProduct-rightDown'>
                <div className='selectedProduct-btn'>
                  <div
                    onClick={() =>
                      item.quantity !== 1 &&
                      changeCountBasketProduct(item.data._id, item.quantity - 1)
                    }
                    className='selectedProduct-btn_c'
                  >
                    -
                  </div>
                  <div className='selectedProduct-btn_count'>
                    {item.quantity}
                  </div>
                  <div
                    onClick={() =>
                      changeCountBasketProduct(item.data._id, item.quantity + 1)
                    }
                    className='selectedProduct-btn_c'
                  >
                    +
                  </div>
                </div>
                <div className='selectedProduct-price'>
                  <div>{item.quantity * item.data.generalInfo.price}</div> ₽
                </div>
              </div>
            </div>
          </section>
        ))}
    </section>
  );
};

export default SelectedProduct;
