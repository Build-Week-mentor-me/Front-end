import React from 'react';
import { Link } from 'react-router-dom';

function SingleProfile ({ props }) {
    const entrepreneur = 'http://nelgara.com.au/img/defaultAccountIcon.jpg';
    const mentor = 'https://images.assetsdelivery.com/compings_v2/apoev/apoev1806/apoev180600175.jpg';

    if (props.position === 'mentor') {
        return (
                <div className="individual">
                    <div className="propUserCard">
                        <div className="image">
                            <img className='profilePic' src={mentor} alt='Missing'/>
                        </div>
                        <div className="content">
                            <div className="propHeader">{props.username}</div>
                            <div className="meta propPosition"><p>{props.position}</p></div>
                            <div className="meta">
                                <p><b>Field of business - </b> Marketing</p>
                            </div>
                            <div className="ui labeled button" tabIndex="0">
                                <div className="ui primary basic button">
                                    <i className="envelope icon large"/>{props.username}@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className='propAbout'>
                        <div className='propAboutSection'>
                            <h4 className='propTitle'>About Myself</h4>
                            <p className='propAboutPara'>
                                Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops. Locomotor trunks owl treats that will be 50 points, Mr. Potter. Witch Weekly, he will rise again and he will come for us, headmaster Erumpent horn. Fenrir Grayback horseless carriages ‘zis is a chance many would die for!
                            </p>
                            <h4 className='propTitle'>My Experience in my Field</h4>
                            <p className='propAboutPara'>
                                Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops. Locomotor trunks owl treats that will be 50 points, Mr. Potter. Witch Weekly, he will rise again and he will come for us, headmaster Erumpent horn. Fenrir Grayback horseless carriages ‘zis is a chance many would die for!
                            </p>
                            <h4 className='propTitle'>Mission Statement of my Company</h4>
                            <p className='propAboutPara'>
                                Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops.
                            </p>
                        </div>
                </div>
                </div>
        )} else {
        return (
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={entrepreneur} alt='Missing'/>
                        </div>
                        <div className="content">
                            <div className="header">{props.username}</div>
                            <div className="meta"><p>{props.position}</p></div>
                            <div>
                                <h3>Field of business - Marketing</h3>
                            </div>
                            <div className="ui labeled button" tabIndex="0">
                                <div className="ui primary basic button">
                                    <i className="handshake outline icon large"/>Get to Know Me</div>
                            </div>
                        </div>
                    </div>
                </div>
        )}}

export default SingleProfile;