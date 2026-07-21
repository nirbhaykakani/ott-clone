
import CarouselMovie from "../components/CarouselMovie";
import CardMovie from "../cards/CardMovie";
import PageLayout from "../pages/PageLayout";

function Movies(){
    return(
        <PageLayout CarouselComponent={CarouselMovie} CardComponent={CardMovie} />
    );
}

export default Movies;