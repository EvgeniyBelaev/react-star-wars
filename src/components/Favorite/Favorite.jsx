import { Link } from 'react-router-dom';
import icon from './img/bookmark.svg'

import style from './Favorite.module.css';

const Favorite = () => {
    return (
        <div>
            <Link to="/favorites">
                <span className={style.counter}>0</span>
                <img src={icon} alt="icon" className={style.icon} />
            </Link>
            
        </div>
    );
}



export default Favorite;