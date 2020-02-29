import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [],
}

function moviesReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'RETURN_MOVIES':
            return { ...state, data : action.value }
        default:
            return state;
    }
}

export const store = createStore(moviesReducer);

