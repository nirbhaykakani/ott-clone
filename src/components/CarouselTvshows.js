import Carousel from 'react-bootstrap/Carousel';
import Panchayat from '../tvshows/panchayat.jpg';
import Pritam_and_pedro from '../tvshows/pritam_and_pedro.webp';

function CarouselTvshows(){
    return(
        <div>
            <Carousel>
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
            </Carousel>
        </div>
    );
}

export default CarouselTvshows;