import { configureStore } from '@reduxjs/toolkit'
import { setLocalStorage } from '@utils/localStorage'

import reducer from './reducers'

const store = configureStore({
    reducer

})

store.subscribe(() => {

    setLocalStorage('store', store.getState().favoriteReducer)
})

export default store