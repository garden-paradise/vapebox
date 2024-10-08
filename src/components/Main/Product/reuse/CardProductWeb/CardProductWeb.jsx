import './CardProductWeb.scss';
import b from './../../../../../images/main/product/Rectangle103.png';
import s from './../../../../../images/main/product/Rectangle108.png';
import MapPin from './../../../../../images/main/product/MapPin.svg';
import Package from './../../../../../images/main/product/Package.svg';
import comment from './../../../../../images/header/ChatCircleGrey.svg';
import ImageGallery from 'react-image-gallery';
import ColorCount from '../ColorCount/ColorCount';
import ColorCircle from '../ColorCirle/ColorCircle';
import NavLinks from '../../../../../reuse_Components/NavLinks/NavLinks';

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
  showBullets: false,
  infinite: true,
  showThumbnails: true,
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

const CardProductWeb = (props) => {
  return (
    <section>
      <NavLinks
        data={[
          { url: 'home', name: 'Главная', active: false },
          { url: 'home', name: 'Главная', active: false },
          { url: 'home', name: 'Главная', active: false },
          { url: 'reviews', name: 'Обзоры', active: true },
        ]}
      />
      <section className='Container cardProductWeb-sec1'>
        <div className='cardProductWeb-sec1Slider'>
          {/* <ImageGallery items={imagesSlider} {...optionSlider} /> */}
        </div>
        <div className='cardProductWeb-sec1SliderInfo'>
          <div className='cardProductWeb-infoName'>Название продукта</div>
          <div className='cardProductWeb-infoSubtitle'>
            <div>
              <span>Арт.:</span> &#160;
              <span> 242424</span>
            </div>
            <div className='cardProductWeb-infoSubtitleImg'>
              <img src={comment} alt='image' /> &#160;
              <div>3</div>
            </div>
            <div>
              <span>Бренд:</span> &#160;
              <span className='cardProductWeb-infoSubtitleBrand'>H5</span>
            </div>
          </div>

          <ColorCircle />

          <ColorCount />

          <button className='BtnGeneral cardProductWeb-infoBtn'>
            Добавить в корзину
          </button>
          <div className='cardProductWeb-infoDelivery'>
            <div className='cardProductWeb-infoDeliveryDivsOption'>
              <div className='cardProductWeb-infoDeliveryOption'>
                <img
                  className='cardProductWeb-infoDeliveryOptionImg'
                  src={MapPin}
                  alt='image'
                />
                <div>
                  <div>Самовывоз</div>
                  <div className='cardProductWeb-infoDeliveryDate'>
                    с 21.01 - бесплатно
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CardProductWeb;
