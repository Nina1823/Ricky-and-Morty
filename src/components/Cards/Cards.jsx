import Card from '../Card/Card.jsx';
import style from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div className={style.cardsContainer}>
         {characters.map((character) => (
            <Card 
               key={character.id}
               character={character}
               onClose={onClose} // Cambiado "onclose" a "onClose"
            />
         ))}
      </div>
   );
}
