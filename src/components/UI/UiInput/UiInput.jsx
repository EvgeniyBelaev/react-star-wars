import PropTypes from 'prop-types';
import cn from 'classnames'
import '../index.css'

import style from './UiInput.module.css';

const UiInput = ({
    value,
    handleInputChange,
    placeholder,
    classes
}) => {
    return (
        <div className={cn(style.wrapper__input, classes)}>
            <input 
                type="text" 
                value={value}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={placeholder}
                className={style.input}
            />
        </div>
    );
}

UiInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
}


export default UiInput;