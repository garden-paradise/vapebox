import Title from '../../../reuse_Components/Title/Title';
import AddressShop from './reuse/AddressShop/AddressShop';
import './ShopsMini.scss';

const ShopsMini = ({ title }) => {
  return (
    <section className='Container'>
      <Title title={title} />

      <section className='shopsMini'>
        <div className='shopsMini-secShops'>
          <AddressShop
            address={[
              {
                name: 'Название магазина',
                open: '28.01.2022',
                address: 'г. Москва, Лазоревый проезд 1А, к2',
                metro: 'м. Ботанический сад',
                time: 'Ежедневно с 10:00 до 22:00',
              },
              {
                name: 'Название магазина',
                open: '28.01.2022',
                address: 'г. Москва, Лазоревый проезд 1А, к2',
                metro: 'м. Ботанический сад',
                time: 'Ежедневно с 10:00 до 22:00',
              },
              {
                name: 'Название магазина',
                open: '28.01.2022',
                address: 'г. Москва, Лазоревый проезд 1А, к2',
                metro: 'м. Ботанический сад',
                time: 'Ежедневно с 10:00 до 22:00',
              },
              {
                name: 'Название магазина',
                open: '28.01.2022',
                address: 'г. Москва, Лазоревый проезд 1А, к2',
                metro: 'м. Ботанический сад',
                time: 'Ежедневно с 10:00 до 22:00',
              },
              {
                name: 'Название магазина',
                open: '28.01.2022',
                address: 'г. Москва, Лазоревый проезд 1А, к2',
                metro: 'м. Ботанический сад',
                time: 'Ежедневно с 10:00 до 22:00',
              },
            ]}
          />
        </div>
        <iframe
          className='shopsMini-map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.3596385148594!2d37.58836791591579!3d55.804356580567166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b549e27f86eef1%3A0x6eb7fa8c20eea136!2z0KHQsNCy0LXQu9C-0LLRgdC60LjQuSDQodC40YLQuA!5e0!3m2!1sru!2sru!4v1645184913549!5m2!1sru!2sru'
          loading='lazy'
        ></iframe>
      </section>
    </section>
  );
};

export default ShopsMini;
