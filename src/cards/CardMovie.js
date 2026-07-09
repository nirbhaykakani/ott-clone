import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RRRCard from '../movies/rrr_card.jpg';
import DhurandharCard from '../movies/dhurandhar_card_wallpaper.webp'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function CardMovie(){
    return(
    <div>
        <Row className="d-flex justify-content-start gap-3">
            <Col xs="auto">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={RRRCard} alt="RRR Movie Poster" />
                <Card.Body>
                    <Card.Title>RRR</Card.Title>
                    <Card.Text>
                        Rise,Roar,Revolt
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col xs="auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={DhurandharCard} alt="DhurandharCard" />
                    <Card.Body>
                        <Card.Title>Dhurandhar</Card.Title>
                        <Card.Text>
                            Aditya Dhar Film
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>);
}

export default CardMovie;