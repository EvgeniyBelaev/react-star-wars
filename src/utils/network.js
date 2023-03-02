

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