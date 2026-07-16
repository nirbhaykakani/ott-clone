import React from "react";
import {Container} from "react-bootstrap";
import CardList from "./CardList";
import { cards } from "../lib/data";

function CardHome() {

    return (
        <div>
            <h1 className="my-4">Trending Movies and TV Shows</h1>
            <Container>
                <CardList cards={cards} />;
            </Container>
        </div>
    );
}

export default CardHome;