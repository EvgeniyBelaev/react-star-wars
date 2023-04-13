import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import style from './SearchPageInfo.module.css';

const SearchPageInfo = ({people}) => {
    return (
        <>
            {people.length
                ?  (
                    <ul className={style.list__container}>
                        {people.map(({ id, name, img }) => 
                            <li key={id} className={style.list__item}>
                                <Link to={`/people/${id}`}>
                                    <img src={img} alt={name} className={style.person__photo} />
                                    <p className={style.person__name}>{name}</p>
                                </Link>
                            </li>
                        )}
                    </ul>
                )
                : <h2 className={style.person__comment}> No reults</h2>
            }
        </>
    );
}

SearchPageInfo.propTypes = {
    people: PropTypes.array
}


export default SearchPageInfo;