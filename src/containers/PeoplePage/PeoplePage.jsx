import { useEffect } from 'react';
import { getApiResurse } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api'

import style from './PeoplePage.module.css';

const PeoplePage = () => {
    const getResurse = async (url) => {
        const res = await getApiResurse(url)
        
        const peopleList = res.results.map(({name, url}) => {
            return {
                name,
                url
            }
        })
        console.log(peopleList)
    }

    useEffect(() => {
        getResurse(API_PEOPLE)
    }, [])

    return (
        <>PeoplePage</>
    );
}

export default PeoplePage;