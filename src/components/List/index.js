import React from 'react';

import { Container } from './styles';
import Movie from '../movie/index';

import { useSelector } from 'react-redux';

export default function List(){
    const movies = useSelector(state => state.data);

    return (
        <Container>
            <div>
                {
                    movies.map((movie, i) => {
                        return (
                            <Movie
                                key={i} 
                                id={movie.id}
                                image={movie.poster_path}
                                title={movie.title}
                                release_date={movie.release_date}
                                overview={movie.overview}
                                vote_average={movie.vote_average}
                            />
                        )
                    })
                }
            </div>
        </Container>
    );
}