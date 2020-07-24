import {combineReducers} from 'redux';
import TeachReducer from './TeachReducer';
import SelectionReducer from './SelectionReducer'

export default combineReducers({
    techs: TeachReducer,
    selectTechId: SelectionReducer,
})