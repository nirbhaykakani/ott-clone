import Carousel from 'react-bootstrap/Carousel';
import rrrPoster from '../movies/rrr_poster.jpg';
import dhurandhar from '../movies/dhurandhar.avif';
import Panchayat from '../tvshows/panchayat.jpg';
import Pritam_and_pedro from '../tvshows/pritam_and_pedro.webp';
import IccWorldCup from '../sports/worldcup.jpg';
import FifaWorldCup from '../sports/fifaworldcup.jpg';

function CarouselMoviesAndTvShows(){
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={rrrPoster} alt="RRR"></img>
                    <Carousel.Caption>
                        <h5>RRR</h5>
                        <p>Rise,Roar,Revolt</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={dhurandhar} alt="Dhurandhar"></img>
                    <Carousel.Caption>
                        <h5>Dhurandhar</h5>
                        <p>Aditya Dhar Movie</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Panchayat} alt="Panchayat"></img>
                    <Carousel.Caption>
                        <h5>Panchayat</h5>
                        <p>A TVF Production</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Pritam_and_pedro} alt="Pritam_and_pedro"></img>
                    <Carousel.Caption>
                        <h5>Pritam and Pedro</h5>
                        <p>Rajkumar Hirani</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={IccWorldCup} alt="IccWorldCup"></img>
                    <Carousel.Caption>
                        <h5>Icc World Cup</h5>
                        <p>Cricket World Cup</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={FifaWorldCup } alt="FifaWorldCup"></img>
                    <Carousel.Caption>
                        <h5>Fifa World Cup</h5>
                        <p>Football World Cup</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselMoviesAndTvShows;