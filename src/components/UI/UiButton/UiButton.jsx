import PropTypes from 'prop-types';
import cn from 'classnames'

import '../index.css'
import style from './UiButton.module.css';

const UiButton = ({
    text, 
    onClick, 
    disabled,
    theme = 'dark'
}) => {
    return (
        <button 
            onClick={onClick} 
            disabled={disabled}
            className={cn(style.button, style[theme])}
        >
            {text}
        </button>
    );
}

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string
}


export default UiButton;