
import highLightsReducer from './highLights'
import faqReducer from './faq'
import aboutContentReducer from './aboutContent'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    highLightsReducer,
    faqReducer,
    aboutContentReducer
})

export default allReducers