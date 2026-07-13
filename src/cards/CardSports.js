import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IccWorldCupCard from '../sports/icc_world_cup_card.webp';
import FifaWorldCupCard from '../sports/fifa_world_cup_card.jpg';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function CardSports(){
    return(
        <div>
            <br />
            <Row className="d-flex justify-content-start gap-3">
                <Col xs="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={IccWorldCupCard} alt="Icc World Cup Card" style={{height:'400px'}}/>
                    <Card.Body>
                        <Card.Title>ICC World Cup</Card.Title>
                        <Card.Text>
                            Cricket World Cup
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={FifaWorldCupCard} alt="DhurandharCard" style={{height:'400px'}}/>
                        <Card.Body>
                            <Card.Title>FIFA WorldCup</Card.Title>
                            <Card.Text>
                                Football World Cup
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default CardSports;