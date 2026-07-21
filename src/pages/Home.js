
import React from "react";
import CarouselMovie from "../components/CarouselMoviesAndTvShows";
import CardHome from "../cards/CardHome";
import PageLayout from "../pages/PageLayout";

function Home(){
    
    return(
        <PageLayout CarouselComponent={CarouselMovie} CardComponent={CardHome} />
    );
}

export default Home;