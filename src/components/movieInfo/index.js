import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function MovieInfo(){
    const id = useSelector(state => state.movieInfoId)
    const dispatch = useDispatch();

    function back(){
        dispatch({ type: 'MOVIE_ID', value: -1 })
    }

    return(
        <div>
            <h1>Ola</h1>
            <button onClick={back}>Voltar</button>
        </div>
    );
}