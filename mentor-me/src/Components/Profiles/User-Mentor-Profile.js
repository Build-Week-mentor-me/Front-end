import React from 'react';
import { Link } from 'react-router-dom';

 function Profile ({props}) {

        console.log(props);
        return (
            <Link to={`profile/${props.name}`}>
                <div className="ui link cards">

                    <div className="card">
                        <div className="image">
                            <img src={props.src} alt='Missing'/>
                        </div>

                        <div className="content">
                            <div className="header">{props.name}</div>
                            <div className="meta"><p>{props.userType}</p></div>
                            <div className="ui labeled button" tabIndex="0">
                                <div className="ui primary basic button">
                                    <i className="handshake outline icon large"/>Get to Know Me</div>
                            </div>
                        </div>
                        <div className="extra content">
                            <span className="right floated">{props.field}</span>
                            {/*<i className="left floated envelope open outline icon">{props.email}</i>*/}
                        </div>
                    </div>
                </div>
            </Link>
        )}

export default Profile;