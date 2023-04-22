import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import style from './StarshipsList.module.css';

const StarshipsList = ({starships}) => {
    return (
        <ul className={style.list__container}>
            {starships.map(({id, name, img}) =>
            <li className={style.list__item} key={id}>
                <Link to={`/starships/${id}`}>
                    <img className={style.ship__photo} src={img} alt={name} />
                    <p>{name}</p>
                </Link>
            </li>)}
        </ul>
    );
}

StarshipsList.propTypes = {
    starships: PropTypes.array
}


export default StarshipsList;