import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigationbar from "../components/Navigationbar";
import CarouselMovie from "../components/CarouselMoviesAndTvShows";
import CardHome from "../cards/CardHome";

function Home(){
    
    return(
        <div>
            <Navigationbar />
            <CarouselMovie />
            <br />
            <br />
            <CardHome />
        </div>
    );
}

export default Home;