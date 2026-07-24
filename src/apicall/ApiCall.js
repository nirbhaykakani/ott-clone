import React, { useEffect, useState } from "react";
import axios from "axios";

function ApiCall({ userId }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => {
                console.log("my res==============", response);
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
        getUser();
      /*      
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.json())
            .then(data => setUser(data));
      */
    }, [userId]);

    if (!user) {
        return <h4>Loading...</h4>;
    }

    return (
        <div>
            <p><b>Username:</b> {user.username}</p>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
        </div>
    );
}

export default ApiCall;