import { useEffect, useState } from 'react';
import { getApiResurse } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';

import style from './PeoplePage.module.css';

const PeoplePage = () => {
    const [people, setPeople] = useState(null)

    const getResurse = async (url) => {
        const res = await getApiResurse(url)
        
        const peopleList = res.results.map(({name, url}) => {
            const id = getPeopleId(url)
            const img = getPeopleImage(id)


            return {
                id, 
                name,
                img
            }
        })
        setPeople(peopleList)
    }

    useEffect(() => {
        getResurse(API_PEOPLE)
    },[])

    return (
        <>
            {people && (
                <PeopleList people={people} />
            )}
            
        </>
    );
}

export default PeoplePage;