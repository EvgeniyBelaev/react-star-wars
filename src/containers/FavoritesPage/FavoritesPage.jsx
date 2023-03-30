import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import PepleList from '@components/PeoplePage/PeopleList'

import style from './FavoritesPage.module.css';

const FavoritesPage = () => {
    const [people, setPeople] = useState([])

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const arr = Object.entries(storeData)

        if(arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })

            setPeople(res)
        }
    }, [])

    
    return (
        <>
            <h1 className='header__text'>Favorite Page</h1>
            {people.length
                ? <PepleList people={people} />
                : <h2 className={style.comment}>No data</h2>
            }
            
        </>
    );
}

export default FavoritesPage;