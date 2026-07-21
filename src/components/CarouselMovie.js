
import CarouselLayout from './CarouselLayout';
import { movieCarousels } from '../lib/movieData';

function CarouselMovie(){
    return(
        <CarouselLayout carousels={movieCarousels}/>
    );
}

export default CarouselMovie;