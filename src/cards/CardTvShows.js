
import { tvCards } from '../lib/tvShowsData';
import CardLayout from "./CardLayout";

function CardTvShows(){
   
    return(
        <CardLayout title="Trending TV Shows" cards={tvCards} />
    );
}

export default CardTvShows;