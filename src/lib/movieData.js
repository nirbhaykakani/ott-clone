import ApiCall from "../apicall/ApiCall";

import RRRCard from "../movies/rrr_card.jpg";
import DhurandharCard from "../movies/dhurandhar_card_wallpaper.webp";
import rrrPoster from '../movies/rrr_poster.jpg';
import dhurandharPoster from '../movies/dhurandhar.avif';

export const movieCards = [
    {
        title: "RRR",
        image: RRRCard,
        text: "Rise, Roar, Revolt",
        component: <ApiCall userId={1} />
    },
    {
        title: "Dhurandhar",
        image: DhurandharCard,
        text: "Aditya Dhar Film",
        component: <ApiCall userId={2} />
    }
];

export const movieCarousels=[{
            poster:rrrPoster,
            title:"RRR",
            captionLine:"Rise,Roar,Revolt"
        },
        {
            poster:dhurandharPoster,
            title:"Dhurandhar",
            captionLine:"Aditya Dhar Movie"
        }
    ];