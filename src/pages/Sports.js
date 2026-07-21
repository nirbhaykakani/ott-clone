
import React from "react";
import CarouselSports from "../components/CarouselSports";
import CardSports from "../cards/CardSports";
import PageLayout from "../pages/PageLayout";

function Sports(){
    return(
       <PageLayout CarouselComponent={CarouselSports} CardComponent={CardSports} />
    );
}

export default Sports;