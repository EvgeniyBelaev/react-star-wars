import style from './PersonInfo.module.css';
import PropTypes from 'prop-types';

const PersonInfo = ({ personInfo }) => {
    return (
        <>
            <div className={style.wrapper}>
                <ul className={style.list__container}>
                    {personInfo.map(({title, data}) => (
                        data && (
                            (<li className={style.list__item} key={title}>
                                <span className={style.item__title}>{title}</span>: {data}
                            </li>)
                        )
                    ))}
                </ul>
            </div>
        </>
    );
}

PersonInfo.propTypes = {
    personInfo: PropTypes.array
}


export default PersonInfo;