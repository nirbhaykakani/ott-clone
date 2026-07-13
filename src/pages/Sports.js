import Navigationbar from "../components/Navigationbar";
import CarouselSports from "../components/CarouselSports";
import CardSports from "../cards/CardSports";

function Sports(){
    return(
        <div>
            <Navigationbar />
            <CarouselSports />
            <br />
            <br />
            
            <CardSports />
        </div>
    );
}

export default Sports;