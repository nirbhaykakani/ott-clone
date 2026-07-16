import { Container } from 'react-bootstrap';
import React from "react";
import { sportsCards } from '../lib/sportsData';
import CardList from './CardList';

function CardSports(){
    
    return(
        <div>
            <h1 className="my-4">Trending Sports</h1>
            <Container>
                <CardList cards={sportsCards} />;
            </Container>
        </div>
    );
}

export default CardSports;