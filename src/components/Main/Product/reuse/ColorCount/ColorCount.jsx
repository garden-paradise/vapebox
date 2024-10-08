import './ColorCount.scss';

const ColorCount = ({ quantity }) => {
  return quantity !== 0 ? (
    <section className='colorCount'>
      <div
        className={`colorCount-block ${quantity > 0 ? 'red' : 'grey'}`}
      ></div>
      <div
        className={`colorCount-block ${quantity > 10 ? 'yellow' : 'grey'}`}
      ></div>
      <div
        className={`colorCount-block ${quantity > 20 ? 'yellow' : 'grey'}`}
      ></div>
      <div
        className={`colorCount-block ${quantity > 30 ? 'green' : 'grey'}`}
      ></div>
      <div
        className={`colorCount-block ${quantity > 40 ? 'green' : 'grey'}`}
      ></div>
    </section>
  ) : (
    <section>нет в наличии</section>
  );
};

export default ColorCount;
