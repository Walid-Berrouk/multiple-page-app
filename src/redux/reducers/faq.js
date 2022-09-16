import * as ActionTypes from '../ActionTypes';

const faqReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.LOAD_FAQ:
            return action.payload
        default:
            return state
    }
}

export default faqReducer