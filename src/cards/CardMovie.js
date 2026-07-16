import {  Container } from 'react-bootstrap';
import React from "react";
import CardList from "./CardList";
import { movieCards } from '../lib/movieData';

function CardMovie(){

    return(
    <div>
        <Container>
            <h1 className="my-4">Trending Movies </h1>
           <CardList cards={movieCards} />;
        </Container>
    </div>);
}

export default CardMovie;