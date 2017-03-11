import * as types from '../actions/actionTypes';

const initialState = {
    likesCount: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREASE_LIKE_COUNTER:
            return {...state, likesCount: state.likesCount + 1}

        default:
            return state
    }
}

export default counter;