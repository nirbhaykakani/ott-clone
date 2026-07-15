import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PanchayatCard from '../movies/panchayat_card.jpg';
import PritamAndPedroCard from '../tvshows/pritam_and_pedro_card.avif';
import { Col, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import React, { useState } from "react";
import ApiCall from "../apicall/ApiCall";

function CardTvShows(){
    const [showUser, setShowUser] = useState(null);
    const cards = [
        {
            title: "Panchayat",
            image: PanchayatCard,
            text: "A TVF Production",
            component: <ApiCall userId={1}/>
        },
        {
            title: "Pritam and Pedro",
            image: PritamAndPedroCard,
            text: "Rajkumar Hirani",
            component: <ApiCall userId={2} />
        }
    ]
    return(
        <div>
            <br />
            <Container>
            <Row className="d-flex justify-content-start gap-3">
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

export default CardTvShows;