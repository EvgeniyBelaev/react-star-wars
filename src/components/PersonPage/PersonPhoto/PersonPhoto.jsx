import style from './PersonPhoto.module.css';
import PropTypes from 'prop-types';

const PersonPhoto = ({ personPhoto, personName }) => {
    return (
        <>
            <div className={style.container}>
                <img className={style.photo} src={personPhoto} alt={personName} />
            </div>
        </>
    );
}

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
}


export default PersonPhoto;