import style from "./Card.module.css";
export default function Card(props) {
   const { onClose, character } = props;
   return (
      <div className={style.cardContainer}>
         <div className={style.imageContainer} >           
            <img src={character.image} alt='' className={style.characterImage} />
            <p className={style.name}>{character.name}</p>
            <button onClick={onClose} className={style.closeButton}>X</button>
            {/* <h2>id: {character.id}</h2> */}
         </div>

         <div className={style.atributes}>
            {/* <p>status: {character.status}</p> */}

            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>species={character.species}</p>
            <p>gender: {character.gender}</p>

            {/* <p>origin: {character.origin.name}</p> */}
         </div>
      </div>
   );
}
