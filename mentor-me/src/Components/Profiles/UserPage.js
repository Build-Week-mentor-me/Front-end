import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../Configuration/axiosconfig';
import SingleProfile from "./SingleProfile";

const UserPage = (props) => {
    const [user, setUser] = useState([]);
    const name = props.match.params.name;
console.log(name);

    useEffect(() => {
        api
            .get(`https://bw-unit4-mentor-me.herokuapp.com/api/users`)
            .then(res => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch(err => {
                console.error(err);
                console.dir(err);
            });
    },[name,setUser]);
    return (
        <section className='profileSection'>
            {user.map((item, index) => {
                if (user[index].username === name) {
                return (
                    <SingleProfile key={index} props={item} />
                )
            }})}
        </section>
    )};

export default UserPage;