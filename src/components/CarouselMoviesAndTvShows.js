
import { carousels } from '../lib/data';
import CarouselLayout from './CarouselLayout';

function CarouselMoviesAndTvShows(){
    return(
        <CarouselLayout carousels={carousels} />
    );
}

export default CarouselMoviesAndTvShows;