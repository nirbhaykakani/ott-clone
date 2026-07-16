
import React, { useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";

function CardList({ cards }) {
    const [showUser, setShowUser] = useState(null);

    return (
            <Row className="g-3">
                {cards.map((card, index) => (
                    <Col xs="auto" key={index}>
                        <Card style={{ width: "18rem" }}> 
                            <Card.Img
                                variant="top"
                                src={card.image}
                                alt={card.title}
                                style={{
                                    height: "400px",
                                    objectFit: "cover"
                                }}
                            />

                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>

                                <Card.Text>
                                    {card.text}
                                </Card.Text>

                                <Button onClick={() =>
                                        setShowUser(
                                            showUser === index ? null : index
                                        )
                                    }
                                >
                                    {showUser === index? "Hide": "Show"}
                                </Button>
                            </Card.Body>

                            {showUser === index && card.component}
                        </Card>
                    </Col>
                ))}
            </Row>
    );
}

export default CardList;