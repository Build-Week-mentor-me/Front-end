import React, { useState, useEffect } from 'react';

function UserPage (props) {
    console.log(props);
    const [user, setUser] = useState([]);

    // user.map((item) => {
    //     return item.name;
    // });

    useEffect(() => {
        setUser(props.data[2]);
    },[user]);

    const { name, email, userType, src, field, about } = user;
    return (
        <div>
            <p>{name}</p>
            <img src={src} alt='missing' />
        </div>
    )


}

export default UserPage;