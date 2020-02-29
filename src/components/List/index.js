import React from 'react';

import { Container } from './styles';
import Movie from '../movie/index';

import { useSelector } from 'react-redux';

export default function List(props){
    const movies = useSelector(state => state.data);

    return (
        <Container>
            <div>
                {
                    movies.map((movie, i) => {
                        return (
                            <Movie 
                                key={i} 
                                image={movie.poster_path}
                                title={movie.title}
                                release_date={movie.release_date}
                                overview={movie.overview}
                                popularity={movie.popularity}
                            />
                        )
                    })
                }
            </div>
        </Container>
    );
}