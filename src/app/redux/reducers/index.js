import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { facebookManagerReducer } from './facebookManager';

const reducers = combineReducers({
    auth: authReducer,
    facebookManager: facebookManagerReducer
})

export default reducers