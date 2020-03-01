import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { Container } from './styles'

export default function Movie(props){
    const percent = props.vote_average * 10;
    const dispatch = useDispatch();

    function handle(){
        dispatch({ type: 'MOVIE_ID', value: props.id })
    }

    return (
            <Container>
                    {
                        props.image != null ? <img  src={`https://image.tmdb.org/t/p/w200${props.image}`}/> : null
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
                            <button onClick={handle}>Informações do filme</button>
                        </section>
                    </div>
            </Container>
    );
}