import Carousel from 'react-bootstrap/Carousel';
import IccWorldCup from '../sports/worldcup.jpg';
import FifaWorldCup from '../sports/fifaworldcup.jpg';

function CarouselSports(){
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={IccWorldCup} alt="IccWorldCup"></img>
                    <Carousel.Caption>
                        <h5>ICC World Cup</h5>
                        <p>Cricket World Cup</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={FifaWorldCup } alt="FifaWorldCup"></img>
                    <Carousel.Caption>
                        <h5>FIFA World Cup</h5>
                        <p>Football World Cup</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselSports;