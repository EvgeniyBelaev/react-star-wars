import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation'
import { getApiResurse, changeHTTP } from '@utils/network';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';
import { HTTPS, SWAPI_ROOT, SWAPI_PARAM_PAGE } from '@constants/api'
import { useQueryParams } from '@hooks/useQueryParams';

import style from './PeoplePage.module.css';

const PeoplePage = ({setErrorApi, category}) => {
    const [people, setPeople] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [counterPage, setCounterPage] = useState(1)

    const query = useQueryParams()
    const queryPage = query.get('page')
    

    const getResurse = async (url) => {
        const res = await getApiResurse(url)

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url, category)
                const img = getPeopleImage(id, category)

    
                return {
                    id, 
                    name,
                    img
                }
            })
            setPeople(peopleList)
            setPrevPage(changeHTTP(res.previous))
            setNextPage(changeHTTP(res.next))
            setCounterPage(getPeoplePageId(url))
            setErrorApi(false)
        } 

        setErrorApi(!res)
    }

    useEffect(() => {
        getResurse(HTTPS + SWAPI_ROOT + `${category}` + SWAPI_PARAM_PAGE + queryPage)
    },[])
    return (
        <>
            <PeopleNavigation 
                getResurse = {getResurse}
                prevPage = {prevPage}
                nextPage = {nextPage}
                counterPage = {counterPage}
                category={category}
            />
            {people && <PeopleList people={people} category={category} />}
        </>
    );
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func,
    category: PropTypes.string
}

export default withErrorApi(PeoplePage);


