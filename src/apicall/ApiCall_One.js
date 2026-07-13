import React, { useState, useEffect } from "react";
import "../App.js";
function ApiCall_One() {
    const [items, setItems] = useState(null);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
                setDataIsLoaded(true);
            });
    }, []); 
    if (!dataIsLoaded) {
        return (
            alert("Please wait some time....")
        );
    }
    return (
        <div className="App">
            <div className="container">
                    <div className="item">
                        <ol>
                            <div>User_Name: {items.username}
                            </div>
                            <div>Full_Name: {items.name}</div>
                            <div>User_Email: {items.email}</div>
                        </ol>
                    </div>
            </div>
        </div>
    );
};
export default ApiCall_One;