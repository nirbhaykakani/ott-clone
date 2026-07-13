import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import axios from "axios";
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
import ApiCall_One from "../apicall/ApiCall_One";

function Home(){
    const [showUser1, setShowUser1] = useState(false);
    const [showUser2, setShowUser2] = useState(false);
    const [showUser3, setShowUser3] = useState(false);
    const [showUser4, setShowUser4] = useState(false);
    const [showUser5, setShowUser5] = useState(false);
    const [showUser6, setShowUser6] = useState(false);
    return(
        <div>
            <Navigationbar />
            <CarouselMovie />
            <br />
            <br />
            <h1>Trending Movies and TV Shows</h1>
            <Row>
                <Col xs="auto" >
                    <br />
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={PanchayatCard} alt="Panchayat" style={{height:'400px'}}/>
                    <Card.Body>
                        <Card.Title>Panchayat</Card.Title>
                        <Card.Text>
                            A TVF Production
                        </Card.Text>
                        <Button onClick={() => { if (!showUser1) setShowUser1(true); else setShowUser1(false);}} variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
                {showUser1 && <ApiCall_One />}
                <Col xs="auto">
                    <br />
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={PritamAndPedroCard} alt="PritamAndPedroCard" style={{height:'400px'}}/>
                        <Card.Body>
                            <Card.Title>Pritam and Pedro</Card.Title>
                            <Card.Text>
                                Rajkumar Hirani
                            </Card.Text>
                           <Button onClick={() => { if (!showUser2) setShowUser2(true); else setShowUser2(false);}} variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                {showUser2 && <ApiCall_One />}
                <Col xs="auto">
                    <br />
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={IccWorldCupCard} alt="Icc World Cup Card" style={{height:'400px'}}/>
                    <Card.Body>
                        <Card.Title>ICC World Cup</Card.Title>
                        <Card.Text>
                            Cricket World Cup
                        </Card.Text>
                        <Button onClick={() => { if (!showUser3) setShowUser3(true); else setShowUser3(false);}} variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
                {showUser3 && <ApiCall_One />}
                <Col xs="auto">
                    <br />
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={FifaWorldCupCard} alt="DhurandharCard" style={{height:'400px'}}/>
                        <Card.Body>
                            <Card.Title>FIFA World Cup</Card.Title>
                            <Card.Text>
                                Football World Cup
                            </Card.Text>
                            <Button onClick={() => { if (!showUser4) setShowUser4(true); else setShowUser4(false);}} variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                {showUser4 && <ApiCall_One />}
                <Col xs="auto">
                <br />
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={RRRCard} alt="RRR Movie Poster" style={{height:'400px'}}/>
                <Card.Body>
                    <Card.Title>RRR</Card.Title>
                    <Card.Text>
                        Rise,Roar,Revolt
                    </Card.Text>
                    <Button onClick={() => { if (!showUser5) setShowUser5(true); else setShowUser5(false);}} variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
                {showUser5 && <ApiCall_One />}
                <Col xs="auto">
                    <br />
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={DhurandharCard} alt="DhurandharCard" style={{height:'400px'}}/>
                        <Card.Body>
                            <Card.Title>Dhurandhar</Card.Title>
                            <Card.Text>
                                Aditya Dhar Film
                            </Card.Text>
                            <Button onClick={() => { if (!showUser6) setShowUser6(true); else setShowUser6(false);}} variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
                {showUser6 && <ApiCall_One />}
            </Row>
        </div>
    );
}

export default Home;