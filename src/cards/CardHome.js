
import { cards } from "../lib/data";
import CardLayout from "./CardLayout";

function CardHome() {

    return (
        <CardLayout title={"Trending Movies and TV Shows"} cards={cards} />
    );
}

export default CardHome;