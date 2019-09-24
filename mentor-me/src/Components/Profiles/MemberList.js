import React from 'react';
import Profile from "./User-Mentor-Profile";
import data from "./data";

function MemberList () {

    return (
        <section className='profileSection'>
            {data.map((item) => {
                return (
                    <Profile key={Math.random()} props={item} />
                )
            })}
        </section>
    )
}

export default MemberList;