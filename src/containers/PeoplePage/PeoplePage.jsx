import { useEffect, useState } from 'react';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getApiResurse } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';

import style from './PeoplePage.module.css';

const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null)
    

    const getResurse = async (url) => {
        const res = await getApiResurse(url)

        if (res) {
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
            setErrorApi(false)
        } 

        setErrorApi(!res)
    }

    useEffect(() => {
        getResurse(API_PEOPLE)
    },[])

    return (
        <>
            <h1>Navigation</h1>
            {people && <PeopleList people={people} />}
        </>
    );
}

export default withErrorApi(PeoplePage);