import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Genero(){
    const genero = useSelector( state => state.generos )

    return(
        <Container>
            {
                genero.map((genero, i) => {
                    return(
                        <div className="div-genero">
                            <p key={i}> {genero.name} </p>
                        </div>
                    );
                })
            }
        </Container>
    );
}