import { combineReducers } from 'redux';
import  dataReducer from './dataReducer';

const rootReducer = combineReducers({
    dataCurrency: dataReducer
})

export default rootReducer;