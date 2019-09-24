import React, { useState, useEffect } from 'react';
import Profile from "./User-Mentor-Profile";
import data from "./data";
import axios from 'axios';

function MemberList () {
    const [users, setUsers] = useState(data);
    // console.log(users);

    useEffect(() => {
        axios({
            method: 'post',
            url: 'https://bw-unit4-mentor-me.herokuapp.com/api/users/register',
            data: {
                src: `${data.src}`,
                userType: `${data.userType}`,
                name: `${data.name}`,
                email: `${data.email}`,
                field: `${data.field}`,
                about: `${data.about}`
            }
        });

        axios.get('https://bw-unit4-mentor-me.herokuapp.com/api/users')
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    },[users]);

    return (
        <section className='profileSection'>
            {users.map((item, index) => {
                return (
                    <Profile key={index} props={item} />
                )
            })}
        </section>
    )
}

export default MemberList;