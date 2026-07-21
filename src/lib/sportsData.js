import ApiCall from "../apicall/ApiCall";

import IccWorldCupCard from "../sports/icc_world_cup_card.webp";
import FifaWorldCupCard from "../sports/fifa_world_cup_card.jpg";

import IccWorldCup from '../sports/worldcup.jpg';
import FifaWorldCup from '../sports/fifaworldcup.jpg';

export const sportsCards = [
    {
        title: "ICC World Cup",
        image: IccWorldCupCard,
        text: "Cricket World Cup",
        component: <ApiCall userId={1} />
    },
    {
        title: "FIFA World Cup",
        image: FifaWorldCupCard,
        text: "Football World Cup",
        component: <ApiCall userId={2} />
    }
];

export  const sportsCarousels=[{
        poster:IccWorldCup,
        title:"ICC World Cup",
        captionLine:"Cricket World Cup"
    },{
        poster:FifaWorldCup,
        title:"FIFA World Cup",
        captionLine:"Football World Cup"
    }
    ];