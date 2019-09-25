import React from 'react';
import { Link } from 'react-router-dom';

 function Profile ({ props }) {
     const entrepreneur = 'http://nelgara.com.au/img/defaultAccountIcon.jpg';
     const mentor = 'https://images.assetsdelivery.com/compings_v2/apoev/apoev1806/apoev180600175.jpg';

     if (props.position === 'mentor') {
         return (
         <Link to={`profile/${props.username}`}>
             <div className="ui link cards">
                 <div className="card">
                     <div className="image">
                         <img src={mentor} alt='Missing'/>
                     </div>
                     <div className="content">
                         <div className="header">{props.username}</div>
                         <div className="meta"><p>{props.position}</p></div>
                         <div className="ui labeled button" tabIndex="0">
                             <div className="ui primary basic button">
                                 <i className="handshake outline icon large"/>Get to Know Me</div>
                         </div>
                     </div>
                 </div>
             </div>
         </Link>
         )} else {
         return (
         <Link to={`profile/${props.username}`}>
             <div className="ui link cards">
                 <div className="card">
                     <div className="image">
                         <img src={entrepreneur} alt='Missing'/>
                     </div>
                     <div className="content">
                         <div className="header">{props.username}</div>
                         <div className="meta"><p>{props.position}</p></div>
                         <div className="ui labeled button" tabIndex="0">
                             <div className="ui primary basic button">
                                 <i className="handshake outline icon large"/>Get to Know Me</div>
                         </div>
                     </div>
                 </div>
             </div>
         </Link>
)}}

export default Profile;