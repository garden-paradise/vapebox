import './Product.scss';
import actual from './../../../images/main/fon/actual.png';
import MapPin from './../../../images/main/product/MapPin.svg';
import Comment from './../../../images/header/ChatCircleGrey.svg';
import InsideMenu from './reuse/InsideMenu/InsideMenu';
import { useEffect, useState } from 'react';
import CardProduct from '../../../reuse_Components/CardProduct/CardProduct';
import Title from '../../../reuse_Components/Title/Title';
import ColorCount from './reuse/ColorCount/ColorCount';
import NavLinks from '../../../reuse_Components/NavLinks/NavLinks';
// import CardProductWeb from './reuse/product/product';
// import CardProductTel from './reuse/CardProductTel/CardProductTel';

const Product = (props) => {
  const [productCard, setProductCard] = useState(null);

  const changeCountBasket = () => {
    let myProducts =
      JSON.parse(localStorage.getItem('myProducts')) === null
        ? []
        : JSON.parse(localStorage.getItem('myProducts'));
    props.getItemCountBasket(
      myProducts.filter((item) => item.basket === true).length
    );
  };
  const addChangeProduct = (changeProduct) => {
    let myProducts =
      JSON.parse(localStorage.getItem('myProducts')) === null
        ? []
        : JSON.parse(localStorage.getItem('myProducts'));

    for (let i = 0; i < myProducts.length; i++) {
      if (myProducts[i].data['_id'] === changeProduct.data._id) {
        const newArr = myProducts.map((item) =>
          item.data._id === changeProduct.data._id ? changeProduct : item
        );
        localStorage.setItem('myProducts', JSON.stringify(newArr));
        setProductCard(
          productCard.map((item) =>
            item.data._id === changeProduct.data._id ? changeProduct : item
          )
        );
        changeCountBasket();
        return;
      }
    }
    myProducts.push(changeProduct);
    localStorage.setItem('myProducts', JSON.stringify(myProducts));
    setProductCard(
      productCard.map((item) =>
        item.data._id === changeProduct.data._id ? changeProduct : item
      )
    );
    changeCountBasket();
  };

  useEffect(() => {
    props.getProductsByIds([
      {
        productId: props.match.params.productId,
        category: props.match.params.category,
      },
    ]);
    window.innerWidth > 1199 && props.getQuantityNewProducts(4);
    window.innerWidth < 1199 && props.getQuantityNewProducts(3);
    window.innerWidth < 950 && props.getQuantityNewProducts(2);
  }, [window.innerWidth]);
  useEffect(() => {
    let myProducts =
      JSON.parse(localStorage.getItem('myProducts')) === null
        ? []
        : JSON.parse(localStorage.getItem('myProducts'));
    props.products &&
      setProductCard(
        props.products.products.map((item, i) => {
          for (let i = 0; i < myProducts.length; i++) {
            if (myProducts[i].data._id === item._id) return myProducts[i];
          }
          return {
            favorites: false,
            compare: false,
            basket: false,
            quantity: 1,
            data: item,
          };
        })
      );
    changeCountBasket();
  }, [props.products]);

  return (
    productCard && (
      <section className='PageBottom100 product'>
        {/* {window.innerWidth < 480 ? <CardProductTel /> : <CardProductWeb />} */}
        <section>
          <NavLinks
            data={[
              { url: 'home', name: 'Главная', active: false },
              { url: 'home', name: 'Главная', active: false },
              { url: 'home', name: 'Главная', active: false },
              { url: 'reviews', name: 'Обзоры', active: true },
            ]}
          />
          <section className='Container product-sec1'>
            <img
              className='product-img'
              src={`https://storage.googleapis.com/${productCard[0].data.photos.folder[0]}/${productCard[0].data.photos.path[0]}`}
              alt={productCard[0].data.photos.filename}
            />
            <div className='product-sec1SliderInfo'>
              <div className='product-infoName'>
                {productCard[0].data.series.name}
              </div>
              <div className='product-infoSubtitle'>
                <div>{`Арт.: ${productCard[0].data.generalInfo.vendorCode}`}</div>
                <div className='product-infoSubtitleImg'>
                  <img src={Comment} alt='imageIMG' /> &#160;
                  <div>{productCard[0].data.comments.length}</div>
                </div>
                <div>
                  <span>Бренд:</span> &#160;
                  <span className='product-infoSubtitleBrand'>
                    {productCard[0].data.series.brand}
                  </span>
                </div>
              </div>

              <ColorCount quantity={productCard[0].data.generalInfo.quantity} />

              {productCard[0].basket ? (
                <button
                  onClick={() =>
                    addChangeProduct({
                      ...productCard[0],
                      basket: !productCard[0].basket,
                    })
                  }
                  className='BtnGeneral product-deleteBtn'
                >
                  Удалить из корзины
                </button>
              ) : (
                <button
                  onClick={() =>
                    addChangeProduct({
                      ...productCard[0],
                      basket: !productCard[0].basket,
                    })
                  }
                  className='BtnGeneral product-addBtn'
                >
                  Добавить в корзину
                </button>
              )}

              <div className='product-infoDelivery'>
                <div className='product-infoDeliveryDivsOption'>
                  <div className='product-infoDeliveryOption'>
                    <img
                      className='product-infoDeliveryOptionImg'
                      src={MapPin}
                      alt='image'
                    />
                    <div>
                      <div>Самовывоз</div>
                      {/* <div className='product-infoDeliveryDate'>
                        с 21.01 - бесплатно
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <InsideMenu
          title={[
            'О товаре',
            'Характеристика',
            'Коментарии',
            'Наличие в магазинах',
          ]}
          characteristic={[
            { name: 'Бренд', value: productCard[0].data.series.brand },
            { name: 'Цена', value: productCard[0].data.generalInfo.price },
            { name: 'Модель', value: productCard[0].data.series.model },
            {
              name: 'Тип продукта',
              value: productCard[0].data.generalInfo.category,
            },
            { name: 'Вкус', value: productCard[0].data.flavor },
            {
              name: 'Емкость батареи',
              value: productCard[0].data.series.batteryCapacity,
            },
            { name: 'Объем', value: productCard[0].data.series.liquidVolume },
            {
              name: 'Солевой никотин',
              value: productCard[0].data.series.nicotinePercentage,
            },
            {
              name: 'Количество затяжек',
              value: productCard[0].data.series.puffsAmount,
            },
            {
              name: 'Зарядка',
              value: productCard[0].data.series.charging ? 'Да' : 'Нет',
            },
            {
              name: 'Подсветка',
              value: productCard[0].data.series.backlight ? 'Да' : 'Нет',
            },
          ]}
          about={productCard[0].data.series.description}
          comment={productCard[0].data.comments}
          commentRating={productCard[0].data.generalInfo.rating}
        />
        <section className='Container'>
          <Title title='Похожие товары' />
          {/* {props.quantityNewProducts && (
          <CardProduct products={props.quantityNewProducts} />
        )} */}
          <img
            className='FonIMG product-productFonImg'
            src={actual}
            alt='fonIMG'
          />
        </section>
      </section>
    )
  );
};

export default Product;
