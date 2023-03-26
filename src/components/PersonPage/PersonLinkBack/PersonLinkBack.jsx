import { useNavigate } from 'react-router-dom';
import iconBack from './img/back.svg'

import style from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
    const navigate = useNavigate()

    const handleGoBack = e => {
        e.preventDefault()
        navigate(-1)
    }
    return (
        <a 
            href="#"
            onClick={handleGoBack}
            className={style.link}
        >
            <img className={style.link__img} src={iconBack} alt="Go Back" />
            <span>Go Back</span>
        </a>
    );
}



export default PersonLinkBack;