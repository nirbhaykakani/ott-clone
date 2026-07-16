import Carousel from 'react-bootstrap/Carousel';
import rrrPoster from '../movies/rrr_poster.jpg';
import dhurandharPoster from '../movies/dhurandhar.avif';
import Panchayat from '../tvshows/panchayat.jpg';
import Pritam_and_pedro from '../tvshows/pritam_and_pedro.webp';
import IccWorldCup from '../sports/worldcup.jpg';
import FifaWorldCup from '../sports/fifaworldcup.jpg';

function CarouselMoviesAndTvShows(){
    const carousels=[
        {
            poster:rrrPoster,
            title:"RRR",
            captionLine:"Rise,Roar,Revolt"
        },
        {
            poster:dhurandharPoster,
            title:"Dhurandhar",
            captionLine:"Aditya Dhar Movie"
        },
        {
            poster:IccWorldCup,
            title:"ICC World Cup",
            captionLine:"Cricket World Cup"
        },
        {
            poster:FifaWorldCup,
            title:"FIFA World Cup",
            captionLine:"Football World Cup"
        },
        {
            poster:Panchayat,
            title:"Panchayat",
            captionLine:"A TVF Production"
        },
        {
            poster:Pritam_and_pedro,
            title:"Pritam and Pedro",
            captionLine:"Rajkumar Hirani"
        }
    ]
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

export default CarouselMoviesAndTvShows;