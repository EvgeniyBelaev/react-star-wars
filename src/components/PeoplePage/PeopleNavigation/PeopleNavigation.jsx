import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import style from './PeopleNavigation.module.css';

const PeopleNavigation = ({
    getResurse,
    prevPage, 
    nextPage, 
    counterPage
}) => {
    return (
        <div>
            <Link to={`/people/?page=${counterPage - 1}`}>
                <button className={style.buttons}>Previous</button>
            </Link>
            <Link to={`/people/?page=${counterPage + 1}`}>
                <button className={style.buttons}>Next</button>
            </Link>
        </div>
    );
}

PeopleNavigation.propTypes = {
    getResurse: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number
}


export default PeopleNavigation;