// import Card from "../Card/Card";
import { connect } from "react-redux";
import Card from "../Card";
import { useDispatch } from "react-redux";
import { filterCards, orderCards} from '../../Redux/actions';
import './Favorites.css'

const Favorites = ({myFavorites}) => {
        const dispatch = useDispatch();
     
        const handleOrder = (event) => {
            dispatch(orderCards(event.target.value))
        }        
        const handleFilter = (event) => {
            dispatch(filterCards(event.target.value))
        }

    return (
        <> 
        <div className="favorites">
            <div className="favorites_options">
        <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknown">Unknown</option>
        </select>
        </div>

            {
                myFavorites.map(fav => {
                    return (
                        <Card 
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            image={fav.image}
                        />
                    )
                })
            }
        </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);