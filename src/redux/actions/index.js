import * as ActionTypes from '../ActionTypes';

// Data
import { HIGHLIGHTS } from '../../shared/highlights';
import { FAQ } from '../../shared/faq'
import { ABOUTCONTENT } from '../../shared/aboutContent'

export const loadHighLights = () => {
    return {
        type: ActionTypes.LOAD_HIGHLIGHTS,
        payload: HIGHLIGHTS
    }
}

export const loadFaq = () => {
    return {
        type: ActionTypes.LOAD_FAQ,
        payload: FAQ
    }
}

export const loadAboutContent = () => {
    return {
        type: ActionTypes.LOAD_ABOUT_CONTENT,
        payload: ABOUTCONTENT
    }
}