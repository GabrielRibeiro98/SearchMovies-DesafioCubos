import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [],
    totalResults: 0,
    valueSearch: '',
    movieInfoId: -1,
}

function moviesReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'STORE_MOVIES':
            return { ...state, data : action.value }
        case 'TOTAL_RESULTS':
            return { ...state, totalResults : action.value }
        case 'VALUE_SEARCH':
            return { ...state, valueSearch: action.value}
        case 'MOVIE_ID':
            return { ...state, movieInfoId: action.value}
        default:
            return state;
    }
}

export const store = createStore(moviesReducer);

