import './CardProductTel.scss';
import b from './../../../../../images/main/product/Rectangle103.png';
import s from './../../../../../images/main/product/Rectangle108.png';
import MapPin from './../../../../../images/main/product/MapPin.svg';
import Package from './../../../../../images/main/product/Package.svg';
import comment from './../../../../../images/header/ChatCircleGrey.svg';
import ImageGallery from 'react-image-gallery';
import ColorCount from '../ColorCount/ColorCount';
import ColorCircle from '../ColorCirle/ColorCircle';
import ArrowTitle from '../../../../../reuse_Components/ArrowTitle/ArrowTitle';

const imagesSlider = [
  {
    original: b,
    thumbnail: s,
  },
  {
    original: b,
    thumbnail: s,
  },
  {
    original: b,
    thumbnail: s,
  },
  {
    original: b,
    thumbnail: s,
  },
  {
    original: b,
    thumbnail: s,
  },
];

const optionSlider = {
  showIndex: false,
  showBullets: true,
  infinite: true,
  showThumbnails: false,
  showFullscreenButton: false,
  showGalleryFullscreenButton: false,
  showPlayButton: false,
  showGalleryPlayButton: false,
  showNav: false,
  isRTL: false,
  slideDuration: 450,
  slideInterval: 2000,
  slideOnThumbnailOver: false,
  thumbnailPosition: 'left',
  useWindowKeyDown: true,
};

const CardProductTel = (props) => {
  return (
    <section className='Container cardProductTel'>
      <ArrowTitle title='Одноразовые сигареты' />
      <div className='cardProductTel-name'>Название продукта</div>
      <div className='cardProductTel-info'>
        <div>
          <span>Арт.:</span> &#160; {242424}
        </div>
        <div className='cardProductTel-comment'>
          <img className='cardProductTel-img' src={comment} alt='commentIMG' />
          &#160; 3
        </div>
        <div>
          <span>Бренд:</span> &#160;
          <b className='cardProductTel-brand'> H5</b>
        </div>
      </div>
      <div className='cardProductTel-gallery'>
        <ImageGallery items={imagesSlider} {...optionSlider} />
      </div>
      <div className='cardProductTel-priceCount'>
        <div className='cardProductTel-price'>{1990} ₽</div>
        <ColorCount />
      </div>
      <ColorCircle />
      <div className='cardProductTel-delivery'>
        <img
          className='cardProductTel-deliveryImg'
          src={MapPin}
          alt='MapPinIMG'
        />
        <div>
          <div>Самовывоз</div>
          <div className='cardProductTel-deliveryInfo'>
            с 21.01 - бесплатно
          </div>
        </div>
      </div>
      <button className='BtnGeneral cardProductTel-infoBtn'>
        Добавить в корзину
      </button>
    </section>
  );
};

export default CardProductTel;
