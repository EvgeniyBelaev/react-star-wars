import { HTTP, HTTPS } from '@constants/api'

/**
 * Изменяет URL c HTT на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url c HTTPS
 */
 
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url
    return result
}


/**
 * Отправляет запрос Fetch
 * @param {String} url - для запроса 
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResurse = async (url) => {
    try {
        const res = await fetch(url)

        if(!res.ok) {
            console.error('Could not fetch.', res.status)
            return false
        }
        
        return await res.json()
        
    } catch (error) {
        console.error('Could not fetch.', error.message)
        return false
    }

}



// getApiResurse(SWAPI_ROOT + SWAPI_PEOPLE) 
//     .then(body => console.log(body))

// (async () => {
//     const body = await getApiResurse(SWAPI_ROOT + SWAPI_PEOPLE)
//     console.log(body)
// })()