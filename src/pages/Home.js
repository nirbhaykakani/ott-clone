import Navigationbar from "../components/Navigationbar";
import CarouselMovie from "../components/CarouselMoviesAndTvShows";
import Card from 'react-bootstrap/Card';
import PanchayatCard from '../movies/panchayat_card.jpg';
import PritamAndPedroCard from '../tvshows/pritam_and_pedro_card.avif';
import IccWorldCupCard from '../sports/icc_world_cup_card.webp';
import FifaWorldCupCard from '../sports/fifa_world_cup_card.jpg';
import RRRCard from '../movies/rrr_card.jpg';
import DhurandharCard from '../movies/dhurandhar_card_wallpaper.webp'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function Home(){
    return(
        <div>
            <Navigationbar />
            <CarouselMovie />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Row>
                <Col xs="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={PanchayatCard} alt="Panchayat" />
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
                        <Card.Img variant="top" src={PritamAndPedroCard} alt="PritamAndPedroCard" />
                        <Card.Body>
                            <Card.Title>Pritam and Pedro</Card.Title>
                            <Card.Text>
                                Rajkumar Hirani
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="auto">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={IccWorldCupCard} alt="Icc World Cup Card" />
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
                        <Card.Img variant="top" src={FifaWorldCupCard} alt="DhurandharCard" />
                        <Card.Body>
                            <Card.Title>FIFA WorldCup</Card.Title>
                            <Card.Text>
                                Football World Cup
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
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
        </div>
    );
}

export default Home;