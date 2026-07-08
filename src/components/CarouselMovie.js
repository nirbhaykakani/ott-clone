import Carousel from 'react-bootstrap/Carousel';
import rrrPoster from '../movies/rrr_poster.jpg';
import dhurandhar from '../movies/dhurandhar.avif';

function CarouselMovie(){
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
            </Carousel>
        </div>
    );
}

export default CarouselMovie;