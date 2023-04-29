import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider'
import Favorite from '@components/Favorite'

import imgLight from './img/light.svg'
import imgDark from './img/dark.svg'
import imgNeitral from './img/neitral.svg'

import style from './Header.module.css';

const Header = () => {
    const [icon, setIcon] = useState(imgNeitral);
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(imgLight); break;
            case THEME_DARK: setIcon(imgDark); break;
            case THEME_NEITRAL: setIcon(imgNeitral); break;
            default: setIcon(imgNeitral);
        }
    }, [isTheme]);

    return (
        <div className={style.container}>
            <img src={icon} alt="logo" className={style.logo} />
            <ul className={style.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people?page=1">People</NavLink></li>
                <li><NavLink to="/starships?page=1">Starships</NavLink></li>
                <li><NavLink to="/not-found">Not Found</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/fail">Fail</NavLink></li>
                
            </ul>
            <Favorite />
            
            
        </div>
    );
}


export default Header;