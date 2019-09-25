import React, { useState, useEffect } from 'react';
import Profile from "./User-Mentor-Profile";
import data from "./data";
import axios from 'axios';

function MemberList () {
    const [users, setUsers] = useState([data]);

        useEffect(() => {
            axios.get('https://bw-unit4-mentor-me.herokuapp.com/api/users')
                .then((res) => {
                    setUsers(res.data);
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err)
                });
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