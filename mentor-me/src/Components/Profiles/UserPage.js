import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Profile from "./User-Mentor-Profile";

const UserPage = (props) => {
    const [user, setUser] = useState([]);
    const name = props.match.params.name;
console.log(name);
    const entrepreneur = 'http://nelgara.com.au/img/defaultAccountIcon.jpg';
    const mentor = 'https://images.assetsdelivery.com/compings_v2/apoev/apoev1806/apoev180600175.jpg';

    useEffect(() => {
        axios
            .get(`https://bw-unit4-mentor-me.herokuapp.com/api/users`)
            .then(res => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    },[name,setUser]);
    return (
        <section className='profileSection'>
            {user.map((item, index) => {
                if (user[index].username === name) {
                return (
                    <Profile key={index} props={item} />
                )
            }})}
        </section>
    )};

export default UserPage;