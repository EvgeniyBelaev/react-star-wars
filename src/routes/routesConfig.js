import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage';
import FavoritesPage from '@containers/FavoritesPage'
import SearchPage from '@containers/SearchPage'
import StarshipsPage from '@containers/StarshipsPage'

import ErrorMessage from '@components/ErrorMessage';

const routesConfig =[
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/people',
        element: <PeoplePage/>
    },
    {
        path: '/people/:id',
        element: <PersonPage/>
    },
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

export default routesConfig
