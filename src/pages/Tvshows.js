import Navigationbar from "../components/Navigationbar";
import CarouselTvshows from "../components/CarouselTvshows";
import CardTvShows from "../cards/CardTvShows";

function Tvshows(){
    return(
        <div>
            <Navigationbar />
            <CarouselTvshows />
            <br />
            <CardTvShows />
            <br />
        </div>
    );
}

export default Tvshows;