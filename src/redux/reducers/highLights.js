import * as ActionTypes from '../ActionTypes';

const highLightsReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.LOAD_HIGHLIGHTS:
            return action.payload
        default:
            return state
    }
}

export default highLightsReducer