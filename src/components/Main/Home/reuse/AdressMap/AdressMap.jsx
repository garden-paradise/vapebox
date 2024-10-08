import './AdressMap.scss';

const AdressMap = ({ data }) => {
  return data.map((item) => (
    <section className='adressMap'>
      <div className='adressMap-name'>{item.name}</div>
      <div>
        Открытие магазина <span className='adressMap-open'>{item.open}</span>{' '}
      </div>
      <div>{item.adress}</div>
      <div>{item.metro}</div>
      <div>{item.time}</div>
    </section>
  ));
};

export default AdressMap;
