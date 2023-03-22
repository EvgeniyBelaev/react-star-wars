import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonPhoto from '@components/PersonPage/PersonPhoto'

import { getApiResurse } from '@utils/network'
import { getPeopleImage } from '@services/getPeopleData'
import { API_PERSON } from '@constants/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi';

import style from './PersonPage.module.css';

const PersonPage = ({setErrorApi}) => {
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        (async() => {
            const res = await getApiResurse(`${API_PERSON}/${id}/`) 

            if(res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ])
                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))

                setErrorApi(false)
            } else {
                setErrorApi(true)
            }
        })()
    }, [])

    return (
        <>
            <div className={style.wrapper}>
                <span className={style.person__name}>{personName}</span>
                
                <div className={style.container}>
                    <PersonPhoto
                        personPhoto={personPhoto}
                        personName={personName}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo} />}
                </div>

            </div>
        </>
    );
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}


export default withErrorApi(PersonPage);