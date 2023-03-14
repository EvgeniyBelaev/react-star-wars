import { useLocation } from 'react-router-dom'
import img from './img/not-found.png'
import style from './NotFoundPage.module.css';


const NotFoundPage = () => {
    let location = useLocation()

    

    return (
        <>
            <img className={style.img} src={img} alt='Not Found' />
            <p className={style.text}>No match for <u>{location.pathname}</u></p>
        </>
    );
}

export default NotFoundPage;