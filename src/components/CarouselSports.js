
import CarouselLayout from './CarouselLayout';
import { sportsCarousels } from '../lib/sportsData';

function CarouselSports(){
    return(
        <CarouselLayout carousels={sportsCarousels} />
    );
}

export default CarouselSports;