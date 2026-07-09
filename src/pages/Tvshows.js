import Navigationbar from "../components/Navigationbar";
import CarouselTvshows from "../components/CarouselTvshows";
import CardTvShows from "../cards/CardTvShows";

function Tvshows(){
    return(
        <div>
            <Navigationbar />
            <CarouselTvshows />
            <br />
            <br />
            <br />
            <CardTvShows />
        </div>
    );
}

export default Tvshows;