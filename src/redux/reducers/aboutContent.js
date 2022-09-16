import * as ActionTypes from '../ActionTypes';

const aboutContentReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.LOAD_ABOUT_CONTENT:
            return action.payload
        default:
            return state
    }
}

export default aboutContentReducer