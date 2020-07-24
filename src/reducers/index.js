import {combineReducers} from 'redux';
import TeachReducer from './TeachReducer';
import SelectionReducer from './SelectionReducer'
import LoginReducer from './LoginReducer'

export default combineReducers({
    techs: TeachReducer,
    selectTechId: SelectionReducer,
    token: LoginReducer,
    tokenRefresh: null,
})