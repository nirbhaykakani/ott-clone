import ApiCall from "../apicall/ApiCall";

import PanchayatCard from "../movies/panchayat_card.jpg";
import PritamAndPedroCard from "../tvshows/pritam_and_pedro_card.avif";

export const tvCards = [
    {
        title: "Panchayat",
        image: PanchayatCard,
        text: "A TVF Production",
        component: <ApiCall userId={1} />
    },
    {
        title: "Pritam and Pedro",
        image: PritamAndPedroCard,
        text: "Rajkumar Hirani",
        component: <ApiCall userId={2} />
    }
];