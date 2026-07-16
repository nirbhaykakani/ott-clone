
import { Container } from 'react-bootstrap';
import React from "react";
import CardList from "./CardList";
import { tvCards } from '../lib/tvShowsData';

function CardTvShows(){
   
    return(
        <div>
            <Container>
                <h1 className="my-4">Trending TV Shows</h1>
                <CardList cards={tvCards} />;
            </Container>
        </div>
    );
}

export default CardTvShows;