import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'
// import {persisStore, persistReducer} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

// const persistConfig = {
//     key : 'root',
//     storage,
//     stateReconciler : autoMergeLevel2
// }
// const persistReducers = persistReducer(persistConfig, reducers)

    const store = createStore(reducers,applyMiddleware(promiseMiddleware()));


export default store;
