
import Carousel from 'react-bootstrap/Carousel';

function CarouselLayout({carousels}){
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

export default CarouselLayout;