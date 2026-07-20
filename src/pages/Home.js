
import React from "react";
import Navigationbar from "../components/Navigationbar";
import CarouselMovie from "../components/CarouselMoviesAndTvShows";
import CardHome from "../cards/CardHome";

function Home(){
    
    return(
        <div>
            <Navigationbar />
            <CarouselMovie />
            <br />
            <CardHome />
            <br />
        </div>
    );
}

export default Home;