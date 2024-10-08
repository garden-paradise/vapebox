const AddressShop = ({ address }) => {
  return address.map((item) => (
    <section className='addressShop'>
      <div className='addressShop-name'>{item.name} </div>
      <div>
        Открытие магазина
        <span className='addressShop-date'> {item.open}</span>
      </div>
      <div>{item.address}</div>
      <div>{item.metro}</div>
      <div>{item.time}</div>
    </section>
  ));
};

export default AddressShop;
