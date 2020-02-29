import React from 'react';


import { Container } from './styles'

export default function Movie(props){
    return (
        <Container>
            <img  src={`https://image.tmdb.org/t/p/w200${props.image}`}/> 
            <div className="div-movie">
                <header className="header-movie">
                    <div className="circle-popularity">{props.popularity}</div>
                    <h1>{props.title}</h1>
                </header>
                <section className="section-movie">
                    <p>{props.release_date}</p>
                    <h2> {props.overview} </h2>
                </section>
            </div>
        </Container>
    );
}