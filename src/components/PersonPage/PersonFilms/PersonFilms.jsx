import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeConcurrentRequest, changeHTTP} from '@utils/network'

import style from './PersonFilms.module.css';

const PersonFilms = ({personFilms}) => {
    const [filmsName, setFilmsName] = useState([])

    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilms.map(url => changeHTTP(url))
            const response = await makeConcurrentRequest(filmsHTTPS)

            setFilmsName(response)
        })()
    },[])

    return (
        <div className={style.wrapper}>
            <ul className={style.container}>
                {filmsName
                    .sort((a, z) => a.episode_id - z.episode_id)
                    .map(({title, episode_id}) =>
                    <li key={episode_id}>
                        <span>Episode {episode_id}</span>
                        <span>:</span>
                        <span>{title}</span>
                    </li> 
                    )
                }
            </ul>
        </div>
    );
}

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}


export default PersonFilms;