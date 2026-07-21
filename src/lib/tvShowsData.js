import ApiCall from "../apicall/ApiCall";

import PanchayatCard from "../movies/panchayat_card.jpg";
import PritamAndPedroCard from "../tvshows/pritam_and_pedro_card.avif";
import Panchayat from '../tvshows/panchayat.jpg';
import Pritam_and_pedro from '../tvshows/pritam_and_pedro.webp';

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

export const  tvShowCarousels=[
        {
            poster:Panchayat,
            title:"Panchayat",
            captionLine:"A TVF Production"
        },
        {
            poster:Pritam_and_pedro,
            title:"Pritam and Pedro",
            captionLine:"Rajkumar Hirani"
        }
    ];