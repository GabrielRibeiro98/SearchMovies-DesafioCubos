import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';

export default function Search(){
    const [query, setQuery] = useState('');
    //const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    const movies = useSelector(state => state.data)
    let baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=';
    let API_KEY = '689fb29fadf001bf3b533b3bf04ec7e0';

    async function handleSubmit(e) {
        e.preventDefault()
        try{
            await fetch(`${baseURL}${API_KEY}&query=${query}`)
                .then(data => data.json())
                .then(data => {
                    console.log(data)
                    const result = dispatch({ type: 'RETURN_MOVIES', value: JSON.parse(JSON.stringify(data.results)) })
                    console.log(result.value)
                    //setTimeout(function(){ console.log(movies) }, 10000);
                });
        }catch(error){
            alert(error)
        }
    }

    function handleChange(e){
        setQuery(e.target.value)
    }

    return(
        <Container>
            <form onSubmit={event => handleSubmit(event)}>
                <input type="search" onChange={event => handleChange(event)}/>
            </form>
        </Container>
    );
}

//<input type="submit" onClick={handleSearchMovie}/>


 /**
  * try{
            fetch(`${baseURL}${API_KEY}&query=${query}`)
                .then(data => data.json())
                .then(data => {
                    console.log(data);
                    dispatch({type: 'RETURN_MOVIES', value: ['1', '1']})
                    const movies = useSelector(state => state.data)
                    console.log(movies)
                });
        }catch(error){
            alert(error)
        }
  */