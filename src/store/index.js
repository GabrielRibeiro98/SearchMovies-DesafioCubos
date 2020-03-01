import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [],
    totalResults: 0,
    valueSearch: '',
    movieInfoId: -1,
    movieInfoData: [],
    generos: [],
    video: '',
}

function moviesReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'STORE_MOVIES':
            return { ...state, data : action.value }
        case 'TOTAL_RESULTS':
            return { ...state, totalResults : action.value }
        case 'VALUE_SEARCH':
            return { ...state, valueSearch: action.value }
        case 'MOVIE_ID':
            return { ...state, movieInfoId: action.value }
        case 'MOVIE_INFO_ARRAY':
            return { ...state, movieInfoData: action.value }
        case 'ADD_GENERO':
            return { ...state, generos: action.value }
        case 'ADD_VIDEO':
            return { ...state, video: action.value }
        default:
            return state;
    }
}

export const store = createStore(moviesReducer);

