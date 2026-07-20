import Carousel from 'react-bootstrap/Carousel';
import rrrPoster from '../movies/rrr_poster.jpg';
import dhurandharPoster from '../movies/dhurandhar.avif';

function CarouselMovie(){
        const carousels=[{
            poster:rrrPoster,
            title:"RRR",
            captionLine:"Rise,Roar,Revolt"
        },
        {
            poster:dhurandharPoster,
            title:"Dhurandhar",
            captionLine:"Aditya Dhar Movie"
        }
    ];
    return(
        <div>
            <Carousel>
                {carousels.map((carousel,index) => (
                    <Carousel.Item>
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

export default CarouselMovie;