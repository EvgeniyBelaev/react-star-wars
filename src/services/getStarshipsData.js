import {HTTP, HTTPS, SWAPI_ROOT, SWAPI_STARSHIPS, GUIDE_IMG_EXTENSION, URL_IMG_SHIP, SWAPI_PARAM_PAGE} from '@constants/api'

const checkProtocol = url => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
}

export const getStarshipsPageId = url => {
    const pos = url.lastIndexof(SWAPI_PARAM_PAGE)
    const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length)

    return Number(id)
}

const getId = (url, cetegory) => {
    const protocol = checkProtocol(url)

    const id = url
        .replace(protocol + SWAPI_ROOT + cetegory, '')
        .replace(/\//g,'')
        return id
}

export const getStarshipsId = url => getId(url, SWAPI_STARSHIPS)
export const getStarshipsImage = id => `${URL_IMG_SHIP}/${id + GUIDE_IMG_EXTENSION}`