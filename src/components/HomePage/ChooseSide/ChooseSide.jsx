import PropTypes from 'prop-types';

import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider'

import style from './ChooseSide.module.css';

const ChooseSide = () => {
    const isTheme = useTheme()

    return (
        <>
            {isTheme.theme}
            <button onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
            <button onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
            <button onClick={() => isTheme.change(THEME_NEITRAL)}>Neitral</button>
        </>
    );
}

ChooseSide.propTypes = {
    // text: PropTypes.string
}


export default ChooseSide;