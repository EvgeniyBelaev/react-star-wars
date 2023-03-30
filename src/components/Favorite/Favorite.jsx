import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import icon from './img/bookmark.svg'

import style from './Favorite.module.css';

const Favorite = () => {
    const [count, setCount] = useState(0)
    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const length = Object.keys(storeData).length
        length.toString().length > 2 ? setCount('...') : setCount(length)
    })

    return (
        <div className={style.container}>
            <Link to="/favorites">
                <span className={style.counter}>{count}</span>
                <img src={icon} alt="icon" className={style.icon} />
            </Link>
            
        </div>
    );
}



export default Favorite;