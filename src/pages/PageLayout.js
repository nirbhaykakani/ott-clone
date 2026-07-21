
import React from "react";
import Navigationbar from "../components/Navigationbar";

function PageLayout({ CarouselComponent, CardComponent }) {
    return (
        <div>
            <Navigationbar />
            <CarouselComponent />
            <br />
            <CardComponent />
            <br />
        </div>
    );
}

export default PageLayout;