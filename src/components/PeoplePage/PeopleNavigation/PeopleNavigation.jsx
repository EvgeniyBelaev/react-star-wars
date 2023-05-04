import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import UiButton from '@ui/UiButton'

import style from './PeopleNavigation.module.css';

const PeopleNavigation = ({
    getResurse,
    prevPage, 
    nextPage, 
    counterPage,
    category
}) => {

    const handleChangeNext = () => getResurse(nextPage)
    const handleChangePrev = () => getResurse(prevPage)

    return (
        <div className={style.container}>
            <Link to={`/${category}/?page=${counterPage - 1}`} className={style.buttons}>
                <UiButton 
                    text = "Previous"
                    onClick = {handleChangePrev} 
                    disabled = {!prevPage}
                    
                />
            </Link>
            <Link to={`/${category}/?page=${counterPage + 1}`} className={style.buttons}>
                <UiButton 
                    text = "Next"
                    onClick = {handleChangeNext} 
                    disabled = {!nextPage}
                />
            </Link>
        </div>
    );
}

PeopleNavigation.propTypes = {
    getResurse: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
    category: PropTypes.string
}


export default PeopleNavigation;