import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions'

import iconFavorite  from './img/favorite.svg'
import iconFavoriteFill from './img/favorite-fill.svg'

import style from './PersonPhoto.module.css';

const PersonPhoto = ({ 
    personPhoto, 
    personName,
    personId,
    personFavorite,
    setPersonFavorite
}) => {
    const dispatch = useDispatch()

    const dicpatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorite(personId))
            setPersonFavorite(false)
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                }
            }))
            setPersonFavorite(true)
        }
    }
    return (
        <>
            <div className={style.container}>
                <img className={style.photo} src={personPhoto} alt={personName} />
                <img 
                    src={personFavorite ? iconFavoriteFill : iconFavorite} 
                    alt="icon" 
                    onClick={dicpatchFavoritePeople}
                    className={style.favorite}
                />
            </div>

           

        </>
    );
}

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personId: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func
}


export default PersonPhoto;