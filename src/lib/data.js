
import PanchayatCard from "../movies/panchayat_card.jpg";
import PritamAndPedroCard from "../tvshows/pritam_and_pedro_card.avif";
import IccWorldCupCard from "../sports/icc_world_cup_card.webp";
import FifaWorldCupCard from "../sports/fifa_world_cup_card.jpg";
import RRRCard from "../movies/rrr_card.jpg";
import DhurandharCard from "../movies/dhurandhar_card_wallpaper.webp";

import rrrPoster from '../movies/rrr_poster.jpg';
import dhurandharPoster from '../movies/dhurandhar.avif';
import Panchayat from '../tvshows/panchayat.jpg';
import Pritam_and_pedro from '../tvshows/pritam_and_pedro.webp';
import IccWorldCup from '../sports/worldcup.jpg';
import FifaWorldCup from '../sports/fifaworldcup.jpg';

import ApiCall from "../apicall/ApiCall";

export const cards = [
        {
            title: "Panchayat",
            image: PanchayatCard,
            text: "A TVF Production",
            component: <ApiCall userId={1}/>
        },
        {
            title: "Pritam and Pedro",
            image: PritamAndPedroCard,
            text: "Rajkumar Hirani",
            component: <ApiCall userId={2}/>
        },
        {
            title: "ICC World Cup",
            image: IccWorldCupCard,
            text: "Cricket World Cup",
            component: <ApiCall userId={3} />
        },
        {
            title: "FIFA World Cup",
            image: FifaWorldCupCard,
            text: "Football World Cup",
            component: <ApiCall userId={4} />
        },
        {
            title: "RRR",
            image: RRRCard,
            text: "Rise, Roar, Revolt",
            component: <ApiCall userId={5} />
        },
        {
            title: "Dhurandhar",
            image: DhurandharCard,
            text: "Aditya Dhar Film",
            component: <ApiCall userId={6} />
        }
    ];

    export const carousels=[
            {
                poster:rrrPoster,
                title:"RRR",
                captionLine:"Rise,Roar,Revolt"
            },
            {
                poster:dhurandharPoster,
                title:"Dhurandhar",
                captionLine:"Aditya Dhar Movie"
            },
            {
                poster:IccWorldCup,
                title:"ICC World Cup",
                captionLine:"Cricket World Cup"
            },
            {
                poster:FifaWorldCup,
                title:"FIFA World Cup",
                captionLine:"Football World Cup"
            },
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