import React from 'react';

import { useSelector } from 'react-redux';
import Pagination from '../pagination/index';
import Search from '../search/index';
import List from '../List/index';
import MovieInfo from '../movieInfo/index';

export default function Navigator(){
    const id = useSelector(state => state.movieInfoId)

    return(
        <>
            {id === -1 ? <>
                <Search/>
                <List />
                <Pagination />
            </> : <MovieInfo /> }
        </>
    );
}