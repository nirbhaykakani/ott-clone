import Carousel from 'react-bootstrap/Carousel';
import Panchayat from '../tvshows/panchayat.jpg';
import Pritam_and_pedro from '../tvshows/pritam_and_pedro.webp';

function CarouselTvshows(){
    const carousels=[
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

export default CarouselTvshows;