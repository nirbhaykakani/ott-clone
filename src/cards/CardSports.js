
import { sportsCards } from '../lib/sportsData';
import CardLayout from "./CardLayout";

function CardSports(){
    
    return(
        <CardLayout title="Trending Sports" cards={sportsCards} />
    );
}

export default CardSports;