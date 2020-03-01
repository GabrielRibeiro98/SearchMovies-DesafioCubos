import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';

import Genero from '../genero/index';
import styled from 'styled-components';


export default function MovieInfo(){
    const infoMovie = useSelector( state => state.movieInfoData )
    const trailerMovie = useSelector ( state => state.video)
    const percent = infoMovie.vote_average * 10;
    const dispatch = useDispatch();

    const receita = infoMovie.revenue;

    function back(){
        dispatch({ type: 'MOVIE_ID', value: -1 })
    }

    return(
        <Container>
            <div>
                <button onClick={back}>Voltar</button>
            </div>
            <div>
                <header>
                    <h1>{infoMovie.title}</h1>
                    <p style={{marginRight: '3vw'}}> {infoMovie.release_date} </p>
                </header>
                <div className="div-row-main">
                    <section>
                        <div style={{width: '100%'}}>
                            <h2> Sinopse </h2>
                            <hr></hr>
                        </div>
                        <p className="p-sinopse"> { infoMovie.overview } </p>
                        <div style={{width: '100%'}}>
                            <h2> Informações </h2>
                            <hr></hr>
                        </div>
                        <div className="div-informacoes">
                            <article>
                                <h3>Situação</h3>
                                <p> { infoMovie.status } </p>
                            </article>
                            <article>
                                <h3>Idioma</h3>
                                <p>Info</p>
                            </article>
                            <article>
                                <h3>Duração</h3>
                                <p> { infoMovie.runtime } min </p>
                            </article>
                            <article>
                                <h3>Orçamento</h3>
                                <p>Info</p>
                            </article>
                            <article>
                                <h3>Receita</h3>
                                <p>${receita}</p>
                            </article>
                            <article>
                                <h3>Lucro</h3>
                                <p>Info</p>
                            </article>
                        </div>
                        <div className="column-genre-percent">
                            <Genero />
                            <div className="circle-popularity">
                                <h2 className="percent">{percent}%</h2>
                            </div>
                        </div>
                    </section>
                    {
                        infoMovie.poster_path != null ? <img  src={`https://image.tmdb.org/t/p/w300${infoMovie.poster_path}`}/> : null
                    }
                </div>
            </div>
            <div style={{display:'flex', alignItems: 'center', justifyContent:'center',marginTop:'3vw'}}><iframe width="800" height="500" src={`http://www.youtube.com/embed/${trailerMovie}`}></iframe></div>
        </Container>
    );
}