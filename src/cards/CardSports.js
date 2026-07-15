import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IccWorldCupCard from '../sports/icc_world_cup_card.webp';
import FifaWorldCupCard from '../sports/fifa_world_cup_card.jpg';
import { Col, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import React, { useState } from "react";
import ApiCall from "../apicall/ApiCall";

function CardSports(){
    const [showUser, setShowUser] = useState(null);

    const cards=[
        {
            title: "ICC World Cup",
            image: IccWorldCupCard,
            text: "Cricket World Cup",
            component: <ApiCall userId={1}/>
        },
        {
            title: "FIFA World Cup",
            image: FifaWorldCupCard,
            text: "Football World Cup",
            component: <ApiCall userId={2}/>
        }
    ];
    
    return(
        <div>
            <br />
            <Container>
                <Row >
                    {cards.map((card, index) => (
                    <Col xs="auto" key={index}>
                        <br />
                        <Card style={{ width: "18rem" }}>
                            
                            <Card.Img
                                variant="top"
                                src={card.image}
                                alt={card.title}
                                style={{ height: "400px" }}
                            />

                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>

                                <Card.Text>
                                    {card.text}
                                </Card.Text>

                                <Button
                                    onClick={() =>
                                        setShowUser(showUser === index ? null : index)
                                    }
                                >
                                    {showUser === index ? "Hide" : "Show"}
                                </Button>
                            </Card.Body>

                            {showUser === index && card.component}
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    );
}

export default CardSports;