import {  Container } from 'react-bootstrap';
import React from "react";
import CardList from "./CardList";
import { movieCards } from '../lib/movieData';

function CardMovie(){

    return(
    <div>
        <h1 className="my-4">Trending Movies </h1>
        <Container>
           <CardList cards={movieCards} />;
        </Container>
    </div>);
}

export default CardMovie;