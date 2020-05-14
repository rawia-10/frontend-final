import {combineReducers} from 'redux'

import medecinReducer from './medecinReducer'
import patientReducer from './patientReducer'
import rdvReducer from './rdvReducer'
import secretaireReducer from './secretaireReducer'

export default combineReducers({patientReducer,medecinReducer,rdvReducer,secretaireReducer})
