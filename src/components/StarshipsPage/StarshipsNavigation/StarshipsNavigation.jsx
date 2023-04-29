import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import UiButton from '@ui/UiButton'

import style from './StarshipsNavigation.module.css';

const StarshipsNavigation = ({
    getResurse,
    prevPage, 
    nextPage, 
    counterPage
}) => {

    const handleChangeNext = () => getResurse(nextPage)
    const handleChangePrev = () => getResurse(prevPage)

    return (
        <div className={style.container}>
            <Link to={`/starships/?page=${counterPage - 1}`} className={style.buttons}>
                <UiButton 
                    text = "Previous"
                    onClick = {handleChangePrev} 
                    disabled = {!prevPage}
                    
                />
            </Link>
            <Link to={`/starships/?page=${counterPage + 1}`} className={style.buttons}>
                <UiButton 
                    text = "Next"
                    onClick = {handleChangeNext} 
                    disabled = {!nextPage}
                />
            </Link>
        </div>
    );
}

StarshipsNavigation.propTypes = {
    getResurse: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number
}


export default StarshipsNavigation;