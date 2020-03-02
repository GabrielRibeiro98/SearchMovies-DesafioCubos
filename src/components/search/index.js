import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from './styles';

export default function Search(){
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    let baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=';
    let API_KEY = '689fb29fadf001bf3b533b3bf04ec7e0';

    async function handleSubmit(e) {
        e.preventDefault()
        if(query === ''){
            return alert('insira um valor');
        }
        try{
            await fetch(`${baseURL}${API_KEY}&query=${query}`)
                .then(data => data.json())
                .then(data => {
                    dispatch({ type: 'STORE_MOVIES', value: data.results})
                    dispatch({ type: 'TOTAL_RESULTS', value:  data.total_results})
                });
        }catch(error){
            alert(error)
        }
    }
    
    function handleChange(e){
        setQuery(e.target.value)
        dispatch({ type: 'VALUE_SEARCH', value: query })
    }

    return(
        <Container>
            <form onSubmit={event => handleSubmit(event)}>
                <input
                    type="search" 
                    onChange={event => handleChange(event)}
                    placeholder="Busque um filme por nome, ano ou gênero..."
                />
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