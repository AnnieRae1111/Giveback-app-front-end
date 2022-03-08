import { combineReducers } from 'redux'
import {reducer as formReducer } from 'redux-form'
//renaming an import statement. importing reducer but want to rename it to somethign that is unique
import auth from './auth'

export default combineReducers({
    auth,
    form: formReducer

})