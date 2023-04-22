import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getApiResurse, changeHTTP } from '@utils/network';
import { getStarshipsId, getStarshipsImage, getStarshipsPageId } from '@services/getStarshipsData';

import { useQueryParams } from '@hooks/useQueryParams';
import { withErrorApi } from '@hoc-helpers/withErrorApi';

import { API_STARSHIPS } from '@constants/api'

import StarshipsNavigation from '@components/StarshipsPage/StarshipsNavigation'
import StarshipsList from '@components/StarshipsPage/StarshipsList'


import style from './StarshipsPage.module.css';

const StarshipsPage = ({setErrorApi}) => {
    const [starships, setStarships] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [counterPage, setCounterPage] = useState(1)

    const query = useQueryParams()
    const queryPage = query.get('page')

    const getResourse = async (url) => {
        const res = await getApiResurse(url)

        if (res) {
            const starshipsList = res.results.map(({name, url}) => {
                const id = getStarshipsId(url)
                const img = getStarshipsImage(id)

                return {
                    id,
                    name,
                    img
                }
            })
            setStarships(starshipsList)
            setPrevPage(changeHTTP(res.previous))
            setNextPage(changeHTTP(res.next))
            setCounterPage(getStarshipsPageId(url))
            setErrorApi(false)
        }

        setErrorApi(!res)
    }

    useEffect(() => {
        getResourse(API_STARSHIPS + queryPage)
    }, [])


    return (
        <>
            <StarshipsNavigation 
                getApiResurse = {getResourse}
                prevPage = {prevPage}
                nextPage = {nextPage}
                counterPage = {counterPage}
            />
            {starships && <StarshipsList starships={starships} />}
        </>
    );
}

StarshipsPage.propTypes = {
    setErrorApi: PropTypes.func
}


export default withErrorApi(StarshipsPage);