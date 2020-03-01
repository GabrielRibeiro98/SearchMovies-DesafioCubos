import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {Container} from './styles'

export default function Pagination(){
    const dispatch = useDispatch();
    const valueSearch = useSelector(state => state.valueSearch);
    const totalResults = useSelector(state => state.totalResults);
    const numberPages = Math.floor(totalResults / 20);

    let baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=';
    let API_KEY = '689fb29fadf001bf3b533b3bf04ec7e0';

    const pageLinks = [];

    async function nextPage (pageNumber) {
        try{
            await fetch(`${baseURL}${API_KEY}&query=${valueSearch}&page=${pageNumber}`)
                .then(data => data.json())
                .then(data => {
                    dispatch({ type: 'STORE_MOVIES', value: data.results })
                });
        }catch(error){
            alert(error)
        }
    }

    for(let i = 1; i <= numberPages; i++ ){
        pageLinks.push(<li className="pagination" key={i} onClick={() => nextPage(i)}><a href="#">{i}</a></li>)
    };

    return (
        <Container>
            <ul className="row-pagination">
                { pageLinks }
            </ul>
        </Container>
    );
}