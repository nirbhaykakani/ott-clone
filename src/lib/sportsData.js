import ApiCall from "../apicall/ApiCall";

import IccWorldCupCard from "../sports/icc_world_cup_card.webp";
import FifaWorldCupCard from "../sports/fifa_world_cup_card.jpg";

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