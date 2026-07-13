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
            <Carousel >
                <Carousel.Item>
                    <img className="d-block w-100" src={rrrPoster} alt="RRR" style={{height:'600px'}}></img>
                    <Carousel.Caption>
                        <h5>RRR</h5>
                        <p>Rise,Roar,Revolt</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={dhurandhar} alt="Dhurandhar" style={{height:'600px'}}></img>
                    <Carousel.Caption>
                        <h5>Dhurandhar</h5>
                        <p>Aditya Dhar Movie</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Panchayat} alt="Panchayat" style={{height:'600px'}}></img>
                    <Carousel.Caption>
                        <h5>Panchayat</h5>
                        <p>A TVF Production</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Pritam_and_pedro} alt="Pritam_and_pedro" style={{height:'600px'}}></img>
                    <Carousel.Caption>
                        <h5>Pritam and Pedro</h5>
                        <p>Rajkumar Hirani</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={IccWorldCup} alt="IccWorldCup" style={{height:'600px'}}></img>
                    <Carousel.Caption>
                        <h5>ICC World Cup</h5>
                        <p>Cricket World Cup</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={FifaWorldCup } alt="FifaWorldCup" style={{height:'600px'}}></img>
                    <Carousel.Caption>
                        <h5>FIFA World Cup</h5>
                        <p>Football World Cup</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselMoviesAndTvShows;