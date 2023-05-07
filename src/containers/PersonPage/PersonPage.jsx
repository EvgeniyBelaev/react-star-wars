import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonPhoto from '@components/PersonPage/PersonPhoto'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';

import UiLoading from '@ui/UiLoading'

import { getApiResurse } from '@utils/network'
import { getPeopleImage } from '@services/getPeopleData'
import { API_PERSON,  HTTPS, SWAPI_ROOT } from '@constants/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi';

import style from './PersonPage.module.css';


const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'))


const PersonPage = ({setErrorApi, category}) => {
    const [personId, setPersonId] = useState(null)
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    const [personFavorite, setPersonFavorite] = useState(false)


    const storeData = useSelector(state => state.favoriteReducer)

    const {id} = useParams()

    useEffect(() => {
        (async() => {
            setPersonId(id)
            const res = await getApiResurse(`${ HTTPS + SWAPI_ROOT + category}/${id}/`) 

            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

            if(res) {
                switch (category) {
                    case 'people':
                        setPersonInfo([
                            { title: 'Height', data: res.height },
                            { title: 'Mass', data: res.mass },
                            { title: 'Hair Color', data: res.hair_color },
                            { title: 'Skin Color', data: res.skin_color },
                            { title: 'Eye Color', data: res.eye_color },
                            { title: 'Birth Year', data: res.birth_year },
                            { title: 'Gender', data: res.gender },
                        ])
                        break;
                    case 'starships':
                        setPersonInfo([
                            { title: 'Starship Class', data: res.starship_class },
                            { title: 'Model', data: res.model },
                            { title: 'Manufacturer', data: res.manufacturer },
                            { title: 'Length', data: res.length },
                            { title: 'Passengers', data: res.passengers },
                            { title: 'Hyperdrive Rating', data: res.hyperdrive_rating },
                            { title: 'Consumables', data: res.consumables },
                        ])
                        break;
                    case 'vehicles':
                        setPersonInfo([
                            { title: 'Model', data: res.model },
                            { title: 'Length', data: res.length },
                            { title: 'Manufacturer', data: res.manufacturer },
                            { title: 'Vehicle Class', data: res.vehicle_class },
                            { title: 'Passengers', data: res.passengers },
                            { title: 'Crew', data: res.crew },
                            { title: 'Cost in Credits', data: res.cost_in_credits },
                        ])
                        break;
                    case 'planets':
                        setPersonInfo([
                            { title: 'Climate', data: res.climate },
                            { title: 'Diameter', data: res.diameter },
                            { title: 'Gravity', data: res.gravity },
                            { title: 'Orbital Period', data: res.orbital_period },
                            { title: 'Population', data: res.population },
                            { title: 'Rotation Period', data: res.rotation_period },
                            { title: 'Terrain', data: res.terrain },
                        ])
                        break;
                    case category === 'species':
                        setPersonInfo([
                            { title: 'Classification', data: res.classification },
                            { title: 'Average Height', data: res.average_height },
                            { title: 'Average Lifespan', data: res.average_lifespan },
                            { title: 'Eye Colors', data: res.eye_colors },
                            { title: 'Hair Colors', data: res.hair_colors },
                            { title: 'Skin Colors', data: res.skin_colors },
                            { title: 'Language', data: res.language },
                        ])
                        break;
                    default:
                        break;
                }

                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id, category))



                res.films.length && setPersonFilms(res.films)

                setErrorApi(false)
            } else {
                setErrorApi(true)
            }
        })()
    }, [])

    return (
        <>
            <PersonLinkBack />

            <div className={style.wrapper}>
                <span className={style.person__name}>{personName}</span>
                
                <div className={style.container}>
                    <PersonPhoto
                        personPhoto={personPhoto}
                        personName={personName}
                        personId={personId}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                        category={category}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo} />}

                    {personFilms &&  (
                        <Suspense fallback={<UiLoading  />}>
                            <PersonFilms personFilms={personFilms} />
                        </Suspense>
                    )}
                    
                </div>

            </div>
        </>
    );
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
    category: PropTypes.string
}


export default withErrorApi(PersonPage);