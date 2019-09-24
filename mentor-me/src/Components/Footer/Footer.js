import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Footer = () => {
    return (
        <main>
            <footer id="mainFooter">
                <div className="footerLinksMediaBlock">
                    <div className="footerUlContainer">
                        <h3 className="logo">Mentor Me</h3>
                        <ul className="footerUl">
                            <li className="footerLi">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="footerLi">
                                <Link to="/loginform">Log in</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="socialMediaIcons">
                        <Link to="#">
                            <i className="fab fa-facebook-square"></i>
                        </Link>
                        <Link to="#">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="#">
                            <i className="fab fa-twitter-square"></i>
                        </Link>
                    </div>
                </div>
                <div className="footerLinksMediaBlock">
                    <Link className="githubLink" to="#">
                        <i className="fab fa-github-square"></i>
                    </Link>
                    <div className="developedByTeam">
                        <ul>
                            <li> <span>Mentor Me Team:</span> Cobrettie, Dylan, Joe, Kevin, TJ, Robert. </li>
                            <li> <span>Ui Developers:</span> Dylan Sieren, Robert Barry. </li>
                            <li> <span>Front-End Engineers:</span> Cobrettie Garner, Joe Thompson, Kevin Grant. </li>
                            <li> <span>Back-End Engineer:</span> TJ Feledy. </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default Footer;