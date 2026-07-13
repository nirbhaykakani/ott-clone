import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PanchayatCard from '../movies/panchayat_card.jpg';
import DhurandharCard from '../tvshows/pritam_and_pedro_card.avif';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function CardTvShows(){
    return(
        <div>
            <br />
            <Row className="d-flex justify-content-start gap-3">
                <Col xs="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={PanchayatCard} alt="Panchayat" style={{height:'400px'}}/>
                    <Card.Body>
                        <Card.Title>Panchayat</Card.Title>
                        <Card.Text>
                            A TVF Production
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={DhurandharCard} alt="DhurandharCard" style={{height:'400px'}}/>
                        <Card.Body>
                            <Card.Title>Pritam and Pedro</Card.Title>
                            <Card.Text>
                                Rajkumar Hirani
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default CardTvShows;