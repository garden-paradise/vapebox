import './PeopleCard.scss';
import AspectRatio from 'react-aspect-ratio';

const PeopleCard = ({ people }) => {
  return (
    <section className='peopleCards'>
      {people.map((people) => (
        <section className='peopleCard'>
          <AspectRatio className='peopleCards-aspectRatio'>
            <img className='peopleCard-img' src={people.img} alt='peopleIMG' />
            <div className='peopleCard-info'>
              <div className='peopleCard-name'>{people.name}</div>
              <div className='peopleCard-position'>{people.position}</div>
            </div>
          </AspectRatio>
        </section>
      ))}
    </section>
  );
};

export default PeopleCard;
