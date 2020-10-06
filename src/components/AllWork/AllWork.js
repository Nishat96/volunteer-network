import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group.png';

const AllWork = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <div>
             <header>
                <div>
                    <img className="logo" src={logo} alt=""/>
                </div>
                <nav> 
                    <Link className="navLink" to="/home">Home</Link>
                    <Link className="navLink" to="/donation">Donation</Link>
                    <Link className="navLink" to="/events">Events</Link>
                    <Link className="navLink" to="/blog">Blog</Link>
                    <Link className="register" to="/register">{loggedInUser.name}</Link>
                    <Link className="admin" to="/admin">Admin</Link>
                </nav>
            </header>
            
        </div>
    );
};

export default AllWork;