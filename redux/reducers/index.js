import {combineReducers} from 'redux';
import userReducer from './userReducer'
import profileReducer  from './profileReducer'
import propinsiReducer  from './propinsiReducer'
import kontrasepsiReducer  from './kontrasepsiReducer'
import pemakaiReducer  from './pemakaiReducer'
import propinsiReducerid  from './propinsiReducerid'


const reducers = combineReducers({
    userReducer,
    profileReducer,
    propinsiReducer,
    kontrasepsiReducer,
    pemakaiReducer,
    propinsiReducerid

})

export default reducers