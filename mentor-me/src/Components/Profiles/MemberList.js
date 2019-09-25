import React, { useState, useEffect } from 'react';
import Profile from "./User-Mentor-Profile";
import axios from 'axios';

function MemberList () {
    const [users, setUsers] = useState([]);

        useEffect(() => {
            axios.get('https://bw-unit4-mentor-me.herokuapp.com/api/users')
                .then((res) => {
                    setUsers(res.data);
                    // console.log(res);
                })
                .catch((err) => {
                    console.log(err)
                });
        },[setUsers]);

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