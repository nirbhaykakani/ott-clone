
import { movieCards } from '../lib/movieData';
import CardLayout from "./CardLayout";

function CardMovie(){
    return(
        <CardLayout title={"Trending Movies"} cards={movieCards} />
    );
}

export default CardMovie;