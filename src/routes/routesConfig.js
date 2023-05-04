import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage';
import FavoritesPage from '@containers/FavoritesPage'
import SearchPage from '@containers/SearchPage'
import {CATEGOTY_LIST} from '@constants/api'


import ErrorMessage from '@components/ErrorMessage';



const routesConfig =[
    {
        path: '/',
        element: <HomePage/>
    },
    // {
    //     path: '/people',
    //     element: <PeoplePage/>
    // },
    // {
    //     path: '/people/:id',
    //     element: <PersonPage/>
    // },

    {
        path: '/favorites',
        element: <FavoritesPage/>
    },
    {
        path: '/search',
        element: <SearchPage/>
    },
    {
        path: '/fail',
        element: <ErrorMessage/>
    },
    {
        path: '/not-found',
        element: <NotFoundPage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
]

CATEGOTY_LIST.map((category) => {
    const element = {
        path : `/${category}`,
        element: <PeoplePage category={category}/>
    }
    const elementPage = {
        path: `/${category}/:id`,
        element: <PersonPage category={category}/>
    }
    routesConfig.push(element)
    routesConfig.push(elementPage)
})


export default routesConfig
