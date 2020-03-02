import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles'

export default function Movie(props){
    const percent = props.vote_average * 10;
    const dispatch = useDispatch();

    let baseURL = 'https://api.themoviedb.org/3/movie/';
    let API_KEY = '689fb29fadf001bf3b533b3bf04ec7e0';

    async function handleSubmit() {
        dispatch({ type: 'MOVIE_ID', value: props.id })
            await fetch(`${baseURL}${props.id}?api_key=${API_KEY}`)
                .then(data => data.json())
                .then(data => {
                    dispatch({ type: 'MOVIE_INFO_ARRAY', value: data})
                    dispatch({ type: 'ADD_GENERO', value: data.genres})
                });
            await fetch(`${baseURL}${props.id}/videos?api_key=${API_KEY}`)
                .then(data => data.json())
                .then(data => {
                    dispatch({ type: 'ADD_VIDEO', value: data.results})
                });
    }

    return (
        <a href="/#" onClick={handleSubmit} style={{textDecoration: 'none'}}>
            <Container>
                    {
                        props.image != null ? <img  src={`https://image.tmdb.org/t/p/w200${props.image}`} alt="img"/> : null
                    }
                    <div className="div-movie">
                        <header className="header-movie">
                            <div className="circle-popularity">
                                <h2 className="percent">{percent}%</h2>
                            </div>
                            <h1>{props.title}</h1>
                        </header>
                        <section className="section-movie">
                            <p>{props.release_date}</p>
                            <h2> {props.overview} </h2>
                        </section>
                    </div>
            </Container>
        </a>
    );
}