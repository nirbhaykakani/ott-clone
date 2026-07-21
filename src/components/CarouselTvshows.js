
import CarouselLayout from './CarouselLayout';
import { tvShowCarousels } from '../lib/tvShowsData';

function CarouselTvshows(){
    return(
        <CarouselLayout carousels={tvShowCarousels} />
    );
}

export default CarouselTvshows;