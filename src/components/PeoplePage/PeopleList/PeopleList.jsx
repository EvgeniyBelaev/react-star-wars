import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import style from './PeopleList.module.css';

const PeopleList = ({people, category}) => {
    return (
        <ul className={style.list__container}>
            {people.map(({id, name, img}) =>
                <li className={style.list__item} key={id}>
                    <Link to={`/${category}/${id}`}>
                        <img className={style.person__photo} src={img} alt={name} />
                        <p>{name}</p>
                    </Link>
                    
                </li>
            )}
        </ul>
    );
}

PeopleList.propTypes = {
    people: PropTypes.array,
    category: PropTypes.string
}

export default PeopleList;