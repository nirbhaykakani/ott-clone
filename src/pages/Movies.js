import Navigationbar from "../components/Navigationbar";
import CarouselMovie from "../components/CarouselMovie";
import CardMovie from "../cards/CardMovie";

function Movies(){
    return(
        <div>
            <Navigationbar />
            <CarouselMovie />
            <br />
            <br />
            <br />
            <CardMovie />
        </div>
    );
}

export default Movies;