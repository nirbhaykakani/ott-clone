
import {Container} from "react-bootstrap";
import CardList from "./CardList";

function CardLayout({title,cards}){
    return( 
        <div>
            <Container>
                <h1 className="my-4">{title}</h1>
                <CardList cards={cards} />
            </Container>
        </div>
    );
}

export default CardLayout;