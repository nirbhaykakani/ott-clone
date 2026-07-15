import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

import { cards } from "../lib/data";

function CardHome() {

    const [showUser, setShowUser] = useState(null);

    return (
        
        <Container>
            
            <h1 className="my-4">Trending Movies and TV Shows</h1>

            <Row>
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
    );
}

export default CardHome;