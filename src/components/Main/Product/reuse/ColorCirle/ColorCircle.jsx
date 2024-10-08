import './ColorCircle.scss';

const ColorCircle = () => {
  return (
    <section className='colorCircle'>
      <div className='colorCircle-title'>
        <span>Цвет: </span>
        <span>Черно-зеленый</span>
      </div>
      <div className='colorCircle-circles'>
        <div className='colorCircle-circle block1'></div>
        <div className='colorCircle-circle block2'></div>
        <div className='colorCircle-circle block3'></div>
        <div className='colorCircle-circle block4'></div>
        <div className='colorCircle-circle block5'></div>
      </div>
    </section>
  );
};

export default ColorCircle;
