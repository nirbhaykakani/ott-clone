
import React from "react";
import CarouselTvshows from "../components/CarouselTvshows";
import CardTvShows from "../cards/CardTvShows";
import PageLayout from "../pages/PageLayout";

function Tvshows(){
    return(
        <PageLayout CarouselComponent={CarouselTvshows} CardComponent={CardTvShows} />
    );
}

export default Tvshows;