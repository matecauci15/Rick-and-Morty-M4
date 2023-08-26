import { Link } from "react-router-dom";
import {addFav, removeFav} from "../../src/Redux/actions"
import { connect } from "react-redux"
import { useState, useEffect } from "react";
import './Card.css'

function Card({id, name, species ,image, onClose, addFav, removeFav, myFavorites}) {

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
      if(isFav){
        setIsFav(false)
        removeFav(id);
      }
      else{
        setIsFav(true);
        addFav({id, name, species ,image, onClose})
      }
  }


  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites, id]);


   return (
     <div className="card">
        <p className="card_id">#{id}</p>
       <Link to={`/detail/${id}`} className="card_name">
        <p>{name}</p>
       </Link>
        <p className="card_specie">{species}</p>
       {/* <h2>{gender}</h2> */}
       {/* <h2>{status}</h2> */}
       {/* <h2>{origin}</h2> */}
       <img src={image} alt="" />
       <div>
       <button className="close_card" onClick={() => onClose(id)}>X</button>
       {
            isFav 
            ? (
                <button className="isfav" onClick={handleFavorite}>❤️</button>
            ) : (
                <button className="isfav" onClick={handleFavorite}>🤍</button>
            )
          }
       </div>
     </div>
   );
}


const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {dispatch(addFav(character))},
    removeFav: (id) => {dispatch(removeFav(id))}
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Card);




