import Carousel from 'react-bootstrap/Carousel';
import IccWorldCup from '../sports/worldcup.jpg';
import FifaWorldCup from '../sports/fifaworldcup.jpg';

function CarouselSports(){
    const carousels=[{
        poster:IccWorldCup,
        title:"ICC World Cup",
        captionLine:"Cricket World Cup"
    },{
        poster:FifaWorldCup,
        title:"FIFA World Cup",
        captionLine:"Football World Cup"
    }
    ];
    return(
        <div>
            <Carousel>
                 {carousels.map((carousel,index) =>
                (<Carousel.Item>
                    <img className="d-block w-100" src={carousel.poster} alt={carousel.title} style={{height:'600px'}}></img>
                    <Carousel.Caption>
                        <h5>{carousel.title}</h5>
                        <p>{carousel.captionLine}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselSports;